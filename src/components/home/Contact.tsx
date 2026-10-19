import "./Contact.css";

export function Contact() {
  return (
    <section className="contact">
      <div className="section-center">
        <h3>join our newsletter and get 20% off</h3>

        <div className="contact-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod
            at rerum eveniet culpa unde excepturi amet totam, quaerat
            repellendus.
          </p>

          <form
            action="https://formspree.io/f/xqazrgvy"
            method="POST"
            className="contact-form"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="_replyto"
              aria-label="Seu endereço de e-mail"
              autoComplete="email"
              required
            />

            <button className="submit-btn" type="submit">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
