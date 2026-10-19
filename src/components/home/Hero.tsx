import { Link } from "react-router-dom";
import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";
import "./Hero.css";

export function Hero() {
  return (
    <section className="section-center hero">
      <article className="hero-content">
        <h1>
          Design your
          <br />
          comfort zone
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          nobis tenetur doloremque exercitationem dolorum voluptatibus eveniet
          sapiente praesentium saepe placeat!
        </p>

        <Link to="/products" className="btn hero-btn">
          Shop now
        </Link>
      </article>

      <article className="hero-img-container">
        <img
          src={heroBcg}
          alt="Mesa de madeira em um ambiente confortável"
          className="hero-main-img"
        />

        <img
          src={heroBcg2}
          alt="Detalhe de móveis para decoração"
          className="hero-accent-img"
        />
      </article>
    </section>
  );
}
