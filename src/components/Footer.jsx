import "./Footer.css";
import { useFilters } from "../hooks/useFilters.js";
export function Footer() {
  const { filters } = useFilters();

  return (
    <footer className="footer">
      <h4>
        Prueba técnica de React ⚛️ － <span>@gergg.dev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer </h5>
      <hr />
      <p>Min Price: {filters.minPrice} - Category {filters.category}</p>
    </footer>
  );
}
