# Comfy Store — React + TypeScript + Redux Toolkit

Projeto educacional inspirado no Comfy Store do John Smilga, reestruturado para:

- React + TypeScript
- Redux Toolkit
- createAsyncThunk
- Axios
- Axios interceptors
- Redux selectors com createSelector
- Features por domínio
- Sem React Context
- Filtros, ordenação, grid de produtos e carrinho

## Instalação

```bash
npm install
npm run dev
```

Depois abra a URL mostrada pelo Vite.

## Build

```bash
npm run build
```

## Arquitetura

```text
src/
├── api/
│   ├── axios.ts
│   └── productsApi.ts
├── app/
│   ├── hooks.ts
│   └── store.ts
├── components/
│   ├── common/
│   ├── filters/
│   ├── layout/
│   └── products/
├── features/
│   ├── cart/
│   ├── filter/
│   └── products/
├── pages/
├── styles/
├── utils/
├── App.tsx
└── main.tsx
```

## Fluxo Redux

```text
API
 ↓
Axios
 ↓
createAsyncThunk
 ↓
productsSlice
 ↓
productsSelectors
 ↓
filterSelectors
 ↓
UI
```

## Observação

Os preços são tratados internamente em centavos. Por exemplo:

```text
309999
```

é exibido como:

```text
R$ 3.099,99
```

O endpoint usado é o `course-api.com` utilizado nos exemplos do Comfy Store. Se quiser usar outra API, altere `VITE_API_URL` no `.env`.
