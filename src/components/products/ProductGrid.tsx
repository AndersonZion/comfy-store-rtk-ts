import type { Product } from "../../features/products/products.types";
import { ProductCard } from "../products/ProductCard";

import "./ProductGrid.css";

interface Props {
  products: Product[];
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return <p className="product-grid-empty">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
