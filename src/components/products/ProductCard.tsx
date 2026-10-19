import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import type { Product } from "../../features/products/products.types";
import { formatPrice } from "../../utils/formatPrice";

import "./ProductCard.css";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const imageUrl = product.image;

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-link">
        <div className="product-image">
          {imageUrl ? (
            <img src={imageUrl} alt={product.name} loading="lazy" />
          ) : (
            <div className="product-image-placeholder">Imagem indisponível</div>
          )}

          <div className="product-image-overlay">
            <FaSearch aria-hidden="true" />
          </div>
        </div>

        <div className="product-card-body">
          <h3>{product.name}</h3>
          <p>{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
