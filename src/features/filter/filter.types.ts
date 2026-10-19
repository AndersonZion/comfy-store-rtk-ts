export type SortOption = "price-lowest" | "price-highest" | "name-a" | "name-z";

export interface FilterState {
  text: string;
  company: string;
  category: string;
  color: string;
  price: number;
  shipping: boolean;
  sort: SortOption;
  gridView: boolean;
}
