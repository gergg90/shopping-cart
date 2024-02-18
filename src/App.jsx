import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import { useState } from "react";
import { Header } from "./components/Header.jsx";

function App() {
  const [products] = useState(initialProducts);

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const productFilter = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

   const leakedProducts = productFilter(products)

  return (
    <>
      <Header setFilters={setFilters} />
      <Products products={leakedProducts} />
    </>
  );
}

export default App;
