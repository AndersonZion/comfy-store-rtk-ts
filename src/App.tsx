import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAppDispatch } from "./app/hooks";
import { fetchProducts } from "./features/products/productsSlice";

import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { CartPage } from "./pages/CartPage";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {/* <main> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* </main> */}

      <Footer />
    </>
  );
}
