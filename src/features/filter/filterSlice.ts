import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterState, SortOption } from "./filter.types";

const initialState: FilterState = {
  text: "",
  company: "all",
  category: "all",
  color: "all",
  price: 0,
  shipping: false,
  sort: "price-highest",
  gridView: true,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },

    setCompany(state, action: PayloadAction<string>) {
      state.company = action.payload;
    },

    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },

    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },

    setPrice(state, action: PayloadAction<number>) {
      state.price = action.payload;
    },

    setShipping(state, action: PayloadAction<boolean>) {
      state.shipping = action.payload;
    },

    setSort(state, action: PayloadAction<SortOption>) {
      state.sort = action.payload;
    },

    setGridView(state) {
      state.gridView = true;
    },

    setListView(state) {
      state.gridView = false;
    },

    clearFilters(state) {
      state.text = "";
      state.company = "all";
      state.category = "all";
      state.color = "all";
      state.price = 0;
      state.shipping = false;

      // Ordenação padrão: maior preço para menor preço.
      state.sort = "price-highest";
    },
  },
});

export const {
  setText,
  setCompany,
  setCategory,
  setColor,
  setPrice,
  setShipping,
  setSort,
  setGridView,
  setListView,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
