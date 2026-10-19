import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  clearSelectedProduct,
  fetchProductById,
} from "../features/products/productsSlice";
import {
  selectDetailError,
  selectDetailStatus,
  selectSelectedProduct,
} from "../features/products/productsSelectors";
import { addToCart } from "../features/cart/cartSlice";
import { formatPrice } from "../utils/formatPrice";
import { StatusMessage } from "../components/common/StatusMessage";
import { ProductImages } from "../components/products/ProductImages";
import "./SingleProductPage.css";

export function SingleProductPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const product = useAppSelector(selectSelectedProduct);
  const status = useAppSelector(selectDetailStatus);
  const error = useAppSelector(selectDetailError);

  const [color, setColor] = useState("");

  useEffect(() => {
    if (id) {
      void dispatch(fetchProductById(id));
    }

    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setColor(product.colors[0] ?? "");
    } else {
      setColor("");
    }
  }, [product]);

  if (status === "loading") {
    return (
      <main className="page single-product-page">
        <StatusMessage message="Carregando produto..." />
      </main>
    );
  }

  if (status === "failed" || !product) {
    return (
      <main className="page single-product-page">
        <StatusMessage
          type="error"
          message={error ?? "Produto não encontrado."}
        />

        <Link className="button" to="/products">
          Voltar
        </Link>
      </main>
    );
  }

  return (
    <main className="page single-product-page">
      <Link className="back-link" to="/products">
        ← Voltar para produtos
      </Link>

      <section className="single-product">
        <div className="single-image">
          <ProductImages
            images={product.images ?? []}
            productName={product.name}
          />
        </div>

        <div className="single-info">
          <p className="eyebrow">{product.company}</p>

          <h1>{product.name}</h1>

          <p className="single-price">{formatPrice(product.price)}</p>

          <p className="description">{product.description}</p>

          <div className="single-colors">
            <strong>Cor:</strong>

            <div className="single-colors-options">
              {product.colors.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`color-btn ${color === item ? "active" : ""}`}
                  style={{ background: item }}
                  onClick={() => setColor(item)}
                  aria-label={`Selecionar ${item}`}
                  aria-pressed={color === item}
                />
              ))}
            </div>
          </div>

          <button
            className="button"
            type="button"
            disabled={!color}
            onClick={() => dispatch(addToCart({ product, color }))}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </section>
    </main>
  );
}
