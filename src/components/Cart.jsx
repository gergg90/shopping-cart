import "./Cart.css";
import {
  CartIcon,
  ClearCartIcon,
  PlusToCartIcon,
  MinusToCartIcon
} from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { useId } from "react";

export function Cart() {
  const cartCheckBoxId = useId();
  const { cart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">
        <h3>Cart</h3>
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
              alt="iphone"
            />
            <div>
              <strong>Iphone</strong> - 9000$
            </div>

            <footer>
              <button>
                <MinusToCartIcon />
              </button>
              <small>Quantity: 1</small>
              <button>
                <PlusToCartIcon />
              </button>
            </footer>
          </li>
        </ul>

        <div className="divClear">
          <strong>Clear</strong>
          <button>
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  );
}
