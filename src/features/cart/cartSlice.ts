import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "./cart.types";
import type { Product } from "../products/products.types";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{
        product: Product;
        color: string;
      }>
    ) {
      const { product, color } = action.payload;
      const existing = state.items.find(
        (item) => item.id === product.id && item.color === color
      );

      if (existing) {
        existing.amount += 1;
        return;
      }

      const item: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        amount: 1,
        color,
      };

      state.items.push(item);
    },
    removeFromCart(
      state,
      action: PayloadAction<{ id: string; color: string }>
    ) {
      state.items = state.items.filter(
        (item) =>
          !(item.id === action.payload.id &&
            item.color === action.payload.color)
      );
    },
    increaseAmount(
      state,
      action: PayloadAction<{ id: string; color: string }>
    ) {
      const item = state.items.find(
        (item) => item.id === action.payload.id && item.color === action.payload.color
      );
      if (item) item.amount += 1;
    },
    decreaseAmount(
      state,
      action: PayloadAction<{ id: string; color: string }>
    ) {
      const item = state.items.find(
        (item) => item.id === action.payload.id && item.color === action.payload.color
      );

      if (!item) return;

      if (item.amount === 1) {
        state.items = state.items.filter(
          (cartItem) =>
            !(cartItem.id === action.payload.id &&
              cartItem.color === action.payload.color)
        );
        return;
      }

      item.amount -= 1;
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
