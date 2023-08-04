import { useContext } from "react";
import { FilterContext } from "../context/filter-types";

export function useFilter() {
  return useContext(FilterContext)
}