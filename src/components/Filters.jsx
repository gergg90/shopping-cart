import { useState, useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters.js";

export function Filters() {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFiltersId = useId();
  const categoryFiltersId = useId();

  const { setFilters } = useFilters();

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFiltersId}>Price</label>
        <input
          type="range"
          id={minPriceFiltersId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFiltersId}>Category</label>
        <select name="" id={categoryFiltersId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}
