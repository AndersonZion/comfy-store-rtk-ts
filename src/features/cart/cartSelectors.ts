import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.amount, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce(
      (total, item) => total + item.price * item.amount,
      0
    )
);
