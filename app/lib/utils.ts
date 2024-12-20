import { Dispatch, SetStateAction } from "react";
import { Product } from "@lib/definition";

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

// function generateSlugWithRandom(
//   category: string,
//   name: string,
//   description?: string,
// ): string {
//   const randomString = Array.from(crypto.getRandomValues(new Uint8Array(12)))
//     .map((byte) => byte.toString(36).padStart(2, "0"))
//     .join("")
//     .substring(0, 16);

//   const normalize = (str: string) =>
//     str
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/^-|-$/g, "");

//   return `${normalize(category)}-${normalize(name)}-${normalize(description)}-${randomString}`;
// }
