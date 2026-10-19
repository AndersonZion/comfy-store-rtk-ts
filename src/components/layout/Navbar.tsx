import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useAppSelector } from "../../app/hooks";
import { selectCartItemsCount } from "../../features/cart/cartSelectors";

import "./Navbar.css";

export function Navbar() {
  const cartCount = useAppSelector(selectCartItemsCount);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="logo" to="/">
          Comfy.
        </Link>

        <nav className="navbar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Início
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Produtos
          </NavLink>
        </nav>

        <Link
          className="cart-link"
          to="/cart"
          aria-label={`Carrinho, ${cartCount} itens`}
        >
          <FaShoppingCart aria-hidden="true" />

          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
}
