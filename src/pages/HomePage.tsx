import { Contact } from "../components/home/Contact";
import { Hero } from "../components/home/Hero";
import { Services } from "../components/home/Services";
import { FeaturedProducts } from "../components/products/FeaturedProducts";

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </>
  );
}
