import { services } from "../../utils/constants";
import "./Services.css";

export function Services() {
  return (
    <section className="services">
      <div className="section-center">
        <article className="services-header">
          <h3>
            Móveis personalizados
            <br />
            feitos para você
          </h3>

          <p>
            Criamos móveis que combinam conforto, funcionalidade e estilo.
            Descubra soluções pensadas para deixar sua casa mais bonita e
            acolhedora.
          </p>
        </article>

        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;

            return (
              <article className="service" key={id}>
                <span className="service-icon" aria-hidden="true">
                  {icon}
                </span>

                <h4>{title}</h4>

                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
