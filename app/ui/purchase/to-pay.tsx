import { getTotalPriceCents, getCartProductsByCustomerId } from "@lib/utils";
import ProductRow from "./product-row";
import Checkout from "./checkout";

export default function ToPay() {
  const cartProducts = getCartProductsByCustomerId(1);
  const totalPriceCents = getTotalPriceCents(cartProducts);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="hidden select-none grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2 border text-center font-medium sm:grid">
          {["Product", "Price", "Quantity", "Total", "Action"].map((head) => (
            <div className="p-2" key={head}>
              {head}
            </div>
          ))}
        </div>

        {cartProducts.map((product) => (
          <ProductRow key={product.slug} {...product} />
        ))}

        <div className="flex grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center justify-between gap-2 border-t text-center font-medium sm:grid">
          <div className="hidden p-2 text-left sm:block"></div>
          <div className="hidden p-2 sm:block"></div>
          <div className="p-2 font-semibold">Total</div>
          <div className="p-2">${totalPriceCents}</div>
          <div className="p-2">
            <Checkout />
          </div>
        </div>
      </div>
    </>
  );
}
