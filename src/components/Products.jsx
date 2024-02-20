import "./Products.css";
import { AddToCartIcon } from "./Icons.jsx";
import { useState } from "react";
import { products as initialProducts } from "../mocks/products.json";
import { useFilters } from "../hooks/useFilters.js";

export function Products() {
  const [products] = useState(initialProducts);
  const {productFilter} = useFilters()

  const all_products = productFilter(products)


  return (
    <main className="products">
      <ul>
        {all_products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
            </div>
            <div className="contentButton">
              {product.price} $
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
