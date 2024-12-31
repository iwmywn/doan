import { CartProductsProps } from "@lib/definition";
import { fetchCart } from "@lib/data";
import { create } from "zustand";

interface CartState {
  cartProducts: CartProductsProps;
  isLoading: boolean;
  fetchCartProducts: (userId: string | undefined) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  cartProducts: [],
  isLoading: true,
  fetchCartProducts: async (userId) => {
    const cachedCartProducts = sessionStorage.getItem("cart");
    if (cachedCartProducts) {
      set({ cartProducts: JSON.parse(cachedCartProducts), isLoading: false });
    } else {
      try {
        if (!userId) sessionStorage.setItem("cart", JSON.stringify(null));
        else {
          const fetchedCartProducts = await fetchCart(userId);
          set({ cartProducts: fetchedCartProducts });
          sessionStorage.setItem("cart", JSON.stringify(fetchedCartProducts));
        }
      } catch (error) {
        console.error("Failed to fetch cart products:", error);
      } finally {
        set({ isLoading: false });
      }
    }
  },
}));
