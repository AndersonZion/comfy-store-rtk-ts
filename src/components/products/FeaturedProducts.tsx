import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectProducts } from "../../features/products/productsSelectors";
import { selectProductsStatus } from "../../features/products/productsSelectors";
import { StatusMessage } from "../common/StatusMessage";
import { ProductCard } from "./ProductCard";
import "./FeaturedProducts.css";

export function FeaturedProducts() {
  const products = useAppSelector(selectProducts);
  const status = useAppSelector(selectProductsStatus);

  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 6);

  if (status === "loading") {
    return <StatusMessage message="Carregando produtos..." />;
  }

  if (status === "failed") {
    return (
      <StatusMessage
        type="error"
        message="Não foi possível carregar os produtos."
      />
    );
  }

  return (
    <section className="section featured-products">
      <div className="title">
        <h2>Produtos em destaque</h2>
        <div className="underline" />
      </div>

      <div className="section-center featured-products-grid">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="featured-empty">
            Nenhum produto em destaque no momento.
          </p>
        )}
      </div>

      <div className="featured-button-container">
        <Link to="/products" className="btn featured-all-button">
          Todos os produtos
        </Link>
      </div>
    </section>
  );
}
