import { Dispatch, SetStateAction } from "react";
import { Product, CartProductsProps } from "@lib/definition";

export function createResponse(message: string, status: number) {
  return new Response(JSON.stringify({ message }), { status });
}

export async function handleTokenVerification(
  endpoint: string,
  setStatus: Dispatch<SetStateAction<"success" | "error" | null>>,
  setMessage: Dispatch<SetStateAction<string>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  token: string | undefined,
) {
  if (token) {
    try {
      const res = await fetch(`/api/auth/${endpoint}?token=${token}`);
      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(result.message);
      } else {
        setStatus("error");
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Verification Token Error: ", error);
      setStatus("error");
      setMessage("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  } else {
    setStatus("error");
    setMessage("Invalid token!");
    setLoading(false);
  }
}

export function shuffleProduct(product: Product[]) {
  const shuffledProduct = [...product];
  for (let i = shuffledProduct.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledProduct[i], shuffledProduct[j]] = [
      shuffledProduct[j],
      shuffledProduct[i],
    ];
  }
  return shuffledProduct;
}

export function formatCurrency(priceCents: number): string {
  return (Math.round(priceCents) / 100).toFixed(2);
}

export function getPriceAfterDiscount(
  priceCents: number,
  saleOff: number,
  quantity: number = 1,
): string {
  return formatCurrency((priceCents - (priceCents * saleOff) / 100) * quantity);
}

export function getTotalPriceCents(
  products: (Product & { quantity: number })[] | null,
): string {
  if (!products) return "0";
  return formatCurrency(
    products.reduce(
      (total, product) =>
        total +
        (product.priceCents - (product.priceCents * product.saleOff) / 100) *
          product.quantity,
      0,
    ),
  );
}

export function transformProducts(
  products: {
    id: string;
    quantity: number;
    size: string;
    priceCents: number;
    saleOff: number;
  }[],
): {
  id: string;
  quantity: number;
  size: string;
  priceCentsAfterDiscount: string[];
}[] {
  return products.map((product) => ({
    id: product.id,
    quantity: product.quantity,
    size: product.size,
    priceCentsAfterDiscount: [
      getPriceAfterDiscount(product.priceCents, product.saleOff),
      getPriceAfterDiscount(
        product.priceCents,
        product.saleOff,
        product.quantity,
      ),
    ],
  }));
}

export function transformCartProducts(
  cartProducts: CartProductsProps,
  products: Product[],
): (Product & { quantity: number; size: string })[] | null {
  if (!cartProducts || !products) return null;

  return cartProducts
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.productId);
      if (!product) return null;

      return {
        id: product.id,
        name: product.name,
        priceCents: product.priceCents,
        images: product.images,
        description: product.description,
        saleOff: product.saleOff,
        slug: product.slug,
        quantity: cartItem.quantity,
        size: cartItem.size,
      };
    })
    .filter(Boolean) as (Product & { quantity: number; size: string })[];
}
