import { useContext } from "react";

import { FiltersContext } from "../context/filters.jsx";

export function useFilters() {
  const context = useContext(FiltersContext);

  if (context === undefined) {
    throw new Error("useFiters must be used within a CartProvider");
  }

  return context;
}
