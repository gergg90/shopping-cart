import { useState } from "react";
import "./Filters.css";

export function Filters({setFilters}) {
  const [minPrice, setMinPrice] = useState(0);


  const handleChangeMinPrice = (e) => {

    setMinPrice(e.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))

  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }


  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" id="price" min="0" max="1000" onChange={handleChangeMinPrice} />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select name="" id="category" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}
