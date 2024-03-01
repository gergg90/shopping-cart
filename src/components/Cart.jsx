import "./Cart.css";
import {
  CartIcon,
  ClearCartIcon,
  PlusToCartIcon,
  MinusToCartIcon,
} from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { useId } from "react";

function CartItem({
  thumbnail,
  title,
  price,
  quantity,
  addToCart,
  minusToCart,
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - {price}$
      </div>

      <footer>
        <button onClick={minusToCart}>
          <MinusToCartIcon />
        </button>
        <small>Quantity: {quantity}</small>
        <button onClick={addToCart}>
          <PlusToCartIcon />
        </button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckBoxId = useId();
  const { cart, clearCart, addToCart, minusToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">
        <h3>Carrito de compras.</h3>
        <hr />
        <ul>
          {cart.map((product) => {
            return (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                minusToCart={() => minusToCart(product)}
                {...product}
              />
            );
          })}
        </ul>

        <div className="divClear">
          <strong>Vaciar Carrito</strong>
          <button onClick={() => clearCart()}>
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  );
}
