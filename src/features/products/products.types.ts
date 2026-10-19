export interface ProductImage {
  id: string;
  url: string;
  filename: string;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  featured: string;
  image: string;
  images?: ProductImage[];
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping: boolean;
  stock: number;
  reviews: number;
  stars: number;
}

export interface ProductsState {
  items: Product[];
  selectedProduct: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  detailStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  detailError: string | null;
}
