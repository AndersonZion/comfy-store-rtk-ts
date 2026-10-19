import api from "./axios";
import type { Product } from "../features/products/products.types";

export async function getProducts(): Promise<Product[]> {
  const response = await api.get<Product[]>("/react-store-products");
  return response.data;
}

export async function getProductById2(id: string): Promise<Product> {
  const response = await api.get<Product[]>(
    `/react-store-single-product?id=${id}`
  );

  const product = response.data[0];

  if (!product) {
    throw new Error("Produto não encontrado.");
  }

  return product;
}

export async function getProductById(id: string): Promise<Product> {
  console.log("ID enviado para API:", id);

  const response = await api.get<Product>(
    `/react-store-single-product?id=${id}`
  );

  console.log("Resposta da API:", response.data);

  const product = response.data;

  if (!product || !product.id) {
    throw new Error("Produto não encontrado.");
  }

  return product;
}
