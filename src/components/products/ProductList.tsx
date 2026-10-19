import { useAppSelector } from "../../app/hooks";
import {
  selectFilteredProducts,
  selectGridView,
} from "../../features/filter/filterSelectors";
import { GridView } from "./GridView";
import { ListView } from "./ListView";

import "./ProductList.css";

export function ProductList() {
  const products = useAppSelector(selectFilteredProducts);
  const gridView = useAppSelector(selectGridView);

  // 1. Nenhum produto encontrado
  if (products.length < 1) {
    return (
      <h5 className="no-products">Sorry, no products matched your search...</h5>
    );
  }

  // 2. Visualização em lista
  if (!gridView) {
    return <ListView products={products} />;
  }

  // 3. Visualização em grade
  return <GridView products={products} />;
}
