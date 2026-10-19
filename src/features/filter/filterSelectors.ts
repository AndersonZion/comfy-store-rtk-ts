import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../../app/store";
import { selectProducts } from "../products/productsSelectors";

// ========================================
// SELETORES DO ESTADO DOS FILTROS
// ========================================

export const selectFilterState = (state: RootState) => state.filter;

export const selectFilterText = (state: RootState) => state.filter.text;

export const selectFilterCompany = (state: RootState) => state.filter.company;

export const selectFilterCategory = (state: RootState) => state.filter.category;

export const selectFilterColor = (state: RootState) => state.filter.color;

export const selectFilterPrice = (state: RootState) => state.filter.price;

export const selectFilterShipping = (state: RootState) => state.filter.shipping;

export const selectSort = (state: RootState) => state.filter.sort;

export const selectGridView = (state: RootState) => state.filter.gridView;

// ========================================
// CATEGORIAS DISPONÍVEIS
// ========================================

export const selectCategories = createSelector([selectProducts], (products) => [
  "all",
  ...new Set(products.map((product) => product.category)),
]);

// ========================================
// EMPRESAS DISPONÍVEIS
// ========================================

export const selectCompanies = createSelector([selectProducts], (products) => [
  "all",
  ...new Set(products.map((product) => product.company)),
]);

// ========================================
// CORES DISPONÍVEIS
// ========================================

export const selectColors = createSelector([selectProducts], (products) => [
  "all",
  ...new Set(products.flatMap((product) => product.colors)),
]);

// ========================================
// MENOR E MAIOR PREÇO
// ========================================

export const selectPriceRange = createSelector([selectProducts], (products) => {
  if (products.length === 0) {
    return {
      minPrice: 0,
      maxPrice: 0,
    };
  }

  const prices = products.map((product) => product.price);

  return {
    minPrice: Math.min(...prices),
    maxPrice: Math.max(...prices),
  };
});

// ========================================
// PRODUTOS FILTRADOS E ORDENADOS
// ========================================

export const selectFilteredProducts = createSelector(
  [
    selectProducts,
    selectFilterText,
    selectFilterCompany,
    selectFilterCategory,
    selectFilterColor,
    selectFilterPrice,
    selectFilterShipping,
    selectSort,
  ],
  (products, text, company, category, color, price, shipping, sort) => {
    // Cria uma cópia para não modificar o array original.
    let result = [...products];

    // 1. Pesquisa pelo nome.
    if (text.trim()) {
      const searchText = text.toLowerCase().trim();

      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchText)
      );
    }

    // 2. Filtro por empresa.
    if (company !== "all") {
      result = result.filter((product) => product.company === company);
    }

    // 3. Filtro por categoria.
    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    // 4. Filtro por cor.
    if (color !== "all") {
      result = result.filter((product) => product.colors.includes(color));
    }

    // 5. Preço máximo.
    // Exemplo: R$ 500 significa produtos de até R$ 500.
    if (price > 0) {
      result = result.filter((product) => product.price <= price);
    }

    // 6. Somente produtos com frete grátis.
    if (shipping) {
      result = result.filter((product) => product.shipping);
    }

    // 7. Ordenação dos resultados.
    switch (sort) {
      case "price-lowest":
        // Menor preço para maior preço.
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-highest":
        // Maior preço para menor preço.
        result.sort((a, b) => b.price - a.price);
        break;

      case "name-a":
        // Ordem alfabética crescente.
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "name-z":
        // Ordem alfabética decrescente.
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  }
);
