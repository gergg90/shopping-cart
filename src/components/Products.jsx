import "./Products.css";
import { AddToCartIcon } from "./Icons.jsx";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img 
                src={product.thumbnail} 
                alt={product.title} 
            />
            <div>
              <strong>{product.title}</strong> 
            </div>
            <div className="contentButton">
            {product.price}  $
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
