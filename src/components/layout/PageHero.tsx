import { Link } from "react-router-dom";
import "./PageHero.css";

interface PageHeroProps {
  title: string;
}

export function PageHero({ title }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          <span className="page-hero-separator">/</span>
          <span>{title}</span>
        </h3>
      </div>
    </section>
  );
}
