import { BsFillGridFill, BsList } from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  selectFilteredProducts,
  selectGridView,
  selectSort,
} from "../../features/filter/filterSelectors";

import {
  setGridView,
  setListView,
  setSort,
} from "../../features/filter/filterSlice";

import type { SortOption } from "../../features/filter/filter.types";

import "./Sort.css";

export function Sort() {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectFilteredProducts);
  const gridView = useAppSelector(selectGridView);
  const sort = useAppSelector(selectSort);

  function handleSortChange(value: SortOption) {
    dispatch(setSort(value));
  }

  return (
    <section className="sort-container">
      <div className="btn-container">
        <button
          className={gridView ? "active" : ""}
          type="button"
          onClick={() => dispatch(setGridView())}
          aria-label="Visualização em grade"
          aria-pressed={gridView}
        >
          <BsFillGridFill />
        </button>

        <button
          className={!gridView ? "active" : ""}
          type="button"
          onClick={() => dispatch(setListView())}
          aria-label="Visualização em lista"
          aria-pressed={!gridView}
        >
          <BsList />
        </button>
      </div>

      <p>
        {products.length}{" "}
        {products.length === 1 ? "product found" : "products found"}
      </p>

      <hr />

      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="sort">sort by</label>

        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={(event) =>
            handleSortChange(event.target.value as SortOption)
          }
        >
          <option value="price-highest">price (highest)</option>
          <option value="price-lowest">price (lowest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </section>
  );
}
