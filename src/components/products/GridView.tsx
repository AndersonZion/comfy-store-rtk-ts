import type { Product as ProductType } from "../../features/products/products.types";
import { ProductCard } from "./ProductCard";
import "./GridView.css";

interface GridViewProps {
  products: ProductType[];
}

export function GridView({ products }: GridViewProps) {
  return (
    <section className="grid-view">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
