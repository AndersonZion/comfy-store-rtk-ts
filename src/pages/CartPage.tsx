import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  clearCart,
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from "../features/cart/cartSlice";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../features/cart/cartSelectors";
import { formatPrice } from "../utils/formatPrice";

export function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const count = useAppSelector(selectCartItemsCount);
  const total = useAppSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <main className="page empty-cart">
        <h1>Seu carrinho está vazio</h1>
        <Link className="button" to="/products">Continuar comprando</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="page-header">
        <p className="eyebrow">Seu pedido</p>
        <h1>Carrinho</h1>
      </div>

      <section className="cart">
        {items.map((item) => (
          <article className="cart-item" key={`${item.id}-${item.color}`}>
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>
              <p>{formatPrice(item.price)}</p>
              <p>Cor: {item.color}</p>
            </div>

            <div className="amount-controls">
              <button
                type="button"
                onClick={() => dispatch(decreaseAmount({ id: item.id, color: item.color }))}
              >
                −
              </button>
              <strong>{item.amount}</strong>
              <button
                type="button"
                onClick={() => dispatch(increaseAmount({ id: item.id, color: item.color }))}
              >
                +
              </button>
            </div>

            <button
              className="remove-button"
              type="button"
              onClick={() => dispatch(removeFromCart({ id: item.id, color: item.color }))}
            >
              Remover
            </button>
          </article>
        ))}

        <div className="cart-summary">
          <span>{count} itens</span>
          <strong>{formatPrice(total)}</strong>
          <button
            className="clear-button"
            type="button"
            onClick={() => dispatch(clearCart())}
          >
            Limpar carrinho
          </button>
        </div>
      </section>
    </main>
  );
}
