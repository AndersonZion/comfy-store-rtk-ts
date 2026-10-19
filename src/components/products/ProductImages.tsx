import { useEffect, useState } from "react";
import type { Product } from "../../features/products/products.types";
import "./ProductImages.css";

type ProductImage = NonNullable<Product["images"]>[number];

interface ProductImagesProps {
  images?: ProductImage[];
}

export function ProductImages({ images = [] }: ProductImagesProps) {
  const [main, setMain] = useState<ProductImage | null>(images[0] ?? null);

  // Atualiza a imagem principal quando as imagens do produto mudarem.
  useEffect(() => {
    setMain(images[0] ?? null);
  }, [images]);

  if (!main?.url) {
    return <div className="product-images-empty">Imagem indisponível</div>;
  }

  return (
    <section className="product-images">
      <img
        src={main.url}
        alt={main.filename ?? "Imagem do produto"}
        className="product-images-main"
      />

      <div className="product-images-gallery">
        {images.map((image, index) => (
          <button
            key={`${image.url}-${index}`}
            type="button"
            className={`product-images-thumbnail ${
              image.url === main.url ? "active" : ""
            }`}
            onClick={() => setMain(image)}
            aria-label={`Ver imagem ${index + 1}`}
            aria-pressed={image.url === main.url}
          >
            <img
              src={image.url}
              alt={image.filename ?? `Imagem ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
