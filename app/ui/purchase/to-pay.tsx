import { getTotalPriceCents } from "@lib/utils";
import ProductRow from "@ui/purchase/product-row";
import Checkout from "@ui/purchase/checkout";
import EmptyState from "@ui/cart/empty";
import { Product } from "@lib/definition";
import { useCartContext } from "@ui/contexts";
import Loading from "@ui/loading";

export default function ToPay({
  cartProducts,
}: {
  cartProducts: (Product & { quantity: number; size: string })[] | null;
}) {
  const totalPriceCents = getTotalPriceCents(cartProducts);
  const { isLoading } = useCartContext();

  if (isLoading) return <Loading />;

  return (
    <>
      {cartProducts === null ? (
        <EmptyState emptyState="toPay" />
      ) : (
        <div className="flex flex-col gap-4">
          <div className="hidden select-none grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2 border text-center font-medium sm:grid">
            {["Product", "Price", "Quantity", "Sub Total", "Action"].map(
              (head) => (
                <div className="p-2" key={head}>
                  {head}
                </div>
              ),
            )}
          </div>

          {cartProducts.map((product) => (
            <ProductRow key={`${product.slug}${product.size}`} {...product} />
          ))}

          <div className="flex grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center justify-between gap-2 border-t text-center sm:grid">
            <div className="hidden p-2 text-left sm:block" />
            <div className="hidden p-2 sm:block" />
            <div className="p-2 font-semibold">TOTAL PRICE</div>
            <div className="p-2 font-medium">${totalPriceCents}</div>
            <div className="p-2">
              <Checkout
                products={cartProducts}
                totalPriceCents={totalPriceCents}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
