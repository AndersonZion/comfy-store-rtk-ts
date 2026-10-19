import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProductById, getProducts } from "../../api/productsApi";
import type { Product, ProductsState } from "./products.types";

const initialState: ProductsState = {
  items: [],
  selectedProduct: null,
  status: "idle",
  detailStatus: "idle",
  error: null,
  detailError: null,
};

function getErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) return "Recurso não encontrado.";
    if (!error.response) return "Não foi possível conectar à API.";
  }

  if (error instanceof Error) return error.message;
  return fallback;
}

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, thunkAPI) => {
  try {
    return await getProducts();
  } catch (error) {
    return thunkAPI.rejectWithValue(
      getErrorMessage(error, "Erro ao carregar produtos.")
    );
  }
});

export const fetchProductById = createAsyncThunk<
  Product,
  string,
  { rejectValue: string }
>("products/fetchProductById", async (id, thunkAPI) => {
  try {
    return await getProductById(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(
      getErrorMessage(error, "Erro ao carregar o produto.")
    );
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelectedProduct(state) {
      state.selectedProduct = null;
      state.detailStatus = "idle";
      state.detailError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "Erro ao carregar produtos.";
      })
      .addCase(fetchProductById.pending, (state) => {
        state.detailStatus = "loading";
        state.detailError = null;
        state.selectedProduct = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.detailError =
          action.payload ?? "Erro ao carregar o produto.";
      });
  },
});

export const { clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
