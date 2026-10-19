import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <h5>&copy; {currentYear}</h5>
      <span>MDN Solution</span>
      <h5>All rights reserved</h5>
    </footer>
  );
}
