import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

const selectProductsState = (state: RootState) => state.products;

export const selectProducts = (state: RootState) =>
  state.products.items;

export const selectProductsStatus = (state: RootState) =>
  state.products.status;

export const selectProductsError = (state: RootState) =>
  state.products.error;

export const selectSelectedProduct = (state: RootState) =>
  state.products.selectedProduct;

export const selectDetailStatus = (state: RootState) =>
  state.products.detailStatus;

export const selectDetailError = (state: RootState) =>
  state.products.detailError;

export const selectProductCount = createSelector(
  [selectProducts],
  (products) => products.length
);

export const selectProductsLoading = createSelector(
  [selectProductsState],
  (state) => state.status === "loading"
);
