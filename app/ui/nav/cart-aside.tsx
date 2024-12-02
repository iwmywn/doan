import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";

export default function CartSummary() {
  return (
    <Link
      className="relative cursor-pointer"
      href="/cart-overlay"
      scroll={false}
    >
      <GiShoppingCart className="text-[22px] md:text-2xl" />
      <span className="pointer-events-none absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full border bg-white text-xs text-black">
        {/* fetch database */}2
      </span>
    </Link>
  );
}