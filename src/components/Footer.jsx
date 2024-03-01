import "./Footer.css";
import { useFilters } from "../hooks/useFilters.js";
import { useCart } from "../hooks/useCart.js";

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      <h4>
        Prueba técnica de React ⚛️ － <span>@gergg.dev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer </h5>
      <hr />
      <p>
        Min Price: {filters.minPrice} - Category {filters.category}
      </p>

      <div>
        <strong>{/* {JSON.stringify(cart, null, 2)} */}</strong>
      </div>
    </footer>
  );
}
