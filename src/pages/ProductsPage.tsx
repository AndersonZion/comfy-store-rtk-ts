import { Filters } from "../components/filters/Filters";
import { ProductList } from "../components/products/ProductList";
import { Sort } from "../components/products/Sort";
import { PageHero } from "../components/layout/PageHero";

import "./ProductsPage.css";

export function ProductsPage() {
  return (
    <main>
      <PageHero title="products" />

      <div className="products-page">
        <div className="section-center products">
          <Filters />

          <div className="products-content">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
}
