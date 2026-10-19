import { FaCheck } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  selectCategories,
  selectCompanies,
  selectColors,
  selectFilterText,
  selectFilterCategory,
  selectFilterCompany,
  selectFilterColor,
  selectFilterPrice,
  selectFilterShipping,
  selectPriceRange,
} from "../../features/filter/filterSelectors";

import {
  setText,
  setCategory,
  setCompany,
  setColor,
  setPrice,
  setShipping,
  clearFilters,
} from "../../features/filter/filterSlice";

import { formatPrice } from "../../utils/formatPrice";
import "./Filters.css";

export function Filters() {
  const dispatch = useAppDispatch();

  // Valores atuais dos filtros no Redux
  const text = useAppSelector(selectFilterText);
  const category = useAppSelector(selectFilterCategory);
  const company = useAppSelector(selectFilterCompany);
  const color = useAppSelector(selectFilterColor);
  const price = useAppSelector(selectFilterPrice);
  const shipping = useAppSelector(selectFilterShipping);

  // Opções calculadas a partir dos produtos
  const categories = useAppSelector(selectCategories);
  const companies = useAppSelector(selectCompanies);
  const colors = useAppSelector(selectColors);
  const { maxPrice } = useAppSelector(selectPriceRange);

  return (
    <section className="filters">
      <div className="filters-content">
        <form onSubmit={(event) => event.preventDefault()}>
          {/* Busca por nome */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={(event) => dispatch(setText(event.target.value))}
            />
          </div>

          {/* Categorias */}
          <div className="form-category">
            <h5>category</h5>

            <div>
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item.toLowerCase() ? "active" : ""}
                  onClick={() => dispatch(setCategory(item.toLowerCase()))}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Empresas */}
          <div className="form-companies">
            <h5>company</h5>

            <select
              name="company"
              value={company}
              onChange={(event) => dispatch(setCompany(event.target.value))}
              className="company"
            >
              {companies.map((item) => (
                <option key={item} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Cores */}
          <div className="form-control">
            <h5>colors</h5>

            <div className="colors">
              {colors.map((item) => {
                const selected = color.toLowerCase() === item.toLowerCase();

                if (item.toLowerCase() === "all") {
                  return (
                    <button
                      key={item}
                      type="button"
                      name="color"
                      className={`all-btn ${selected ? "active" : ""}`}
                      onClick={() => dispatch(setColor("all"))}
                    >
                      all
                    </button>
                  );
                }

                return (
                  <button
                    key={item}
                    type="button"
                    name="color"
                    aria-label={`Filtrar pela cor ${item}`}
                    aria-pressed={selected}
                    style={{ background: item }}
                    className={`color-btn ${selected ? "active" : ""}`}
                    onClick={() => dispatch(setColor(item))}
                  >
                    {selected && <FaCheck aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preço */}
          <div className="form-control">
            <h5>price</h5>

            <p className="price">
              {formatPrice(price === 0 ? maxPrice : price)}
            </p>

            <input
              type="range"
              name="price"
              min={0}
              max={maxPrice}
              step={1}
              value={price === 0 ? maxPrice : price}
              onChange={(event) =>
                dispatch(setPrice(Number(event.target.value)))
              }
              disabled={maxPrice <= 0}
              aria-label="Preço máximo"
            />

            <div className="price-range">
              <span>R$ 0</span>
              <span>{formatPrice(maxPrice)}</span>
            </div>
          </div>

          {/* Frete grátis */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>

            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={(event) => dispatch(setShipping(event.target.checked))}
            />
          </div>
        </form>

        {/* Limpar filtros */}
        <button
          type="button"
          className="clear-btn"
          onClick={() => dispatch(clearFilters())}
        >
          clear filters
        </button>
      </div>
    </section>
  );
}
