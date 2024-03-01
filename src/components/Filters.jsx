import {  useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters.js";

export function Filters() {
  const minPriceFiltersId = useId();
  const categoryFiltersId = useId();

  const { filters, setFilters } = useFilters();

  const handleChangeMinPrice = (e) => {
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
        <label htmlFor={minPriceFiltersId}>Precio</label>
        <input
          type="range"
          id={minPriceFiltersId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFiltersId}>Category</label>
        <select name="" id={categoryFiltersId} onChange={handleChangeCategory}>
          <option value="all">Todo</option>
          <option value="home-decoration">Decoracion para hogar</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Perfumes</option>
          <option value="skincare">Protección de la piel</option>
          <option value="groceries">Comestibles</option>
        </select>
      </div>
    </section>
  );
}
