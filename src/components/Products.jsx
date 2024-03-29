import "./Products.css";
import { AddToCartIcon, ProductsAddedToCartIcon } from "./Icons.jsx";
import { useState } from "react";
import { products as initialProducts } from "../mocks/products.json";
import { useFilters } from "../hooks/useFilters.js";
import { useCart } from "../hooks/useCart.js";

export function Products() {
  const [products] = useState(initialProducts);
  const { productFilter } = useFilters();

  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const allOrFiltered = productFilter(products);

  return (
    <main className="products">
      <ul>
        {allOrFiltered.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
              </div>
              <div className="contentButton">
                {product.price} $
                <button
                  style={{
                    backgroundColor: isProductInCart ? "crimson" : "teal",
                  }}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? (
                    <ProductsAddedToCartIcon />
                  ) : (
                    <AddToCartIcon />
                  )}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
