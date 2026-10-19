import { Link } from "react-router-dom";
import type { Product } from "../../features/products/products.types";
import { formatPrice } from "../../utils/formatPrice";
import "./ListView.css";

interface ListViewProps {
  products: Product[];
}

export function ListView({ products }: ListViewProps) {
  return (
    <section className="list-view">
      {products.map((product) => {
        const { id, image, name, price, description } = product;

        return (
          <article className="list-view-item" key={id}>
            {image ? (
              <img src={image} alt={name} loading="lazy" />
            ) : (
              <div className="list-view-image-placeholder">
                Imagem indisponível
              </div>
            )}

            <div className="list-view-content">
              <h4>{name}</h4>

              <h5 className="price">{formatPrice(price)}</h5>

              <p>
                {description
                  ? `${description.substring(0, 150)}...`
                  : "Descrição indisponível."}
              </p>

              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}
