import type { Product } from "../products/products.types";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  amount: number;
  color: string;
}

export interface CartState {
  items: CartItem[];
}
