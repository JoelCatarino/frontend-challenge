import { useFilter } from "../hook/useFilter";
import { FilterType } from "../types/filter-types";

interface FilterByTypeProps {
  selected: boolean
}

export function FilterItemShirt({selected}: FilterByTypeProps) {
  
  const { type, setType } = useFilter();
  
  const handleChangeType = (value: FilterType) => {
    setType(value);
  };
  
  return (
    <>
        <li onClick={() => handleChangeType(FilterType.SHIRT)} className="uppercase text-center">Camisas</li>
    </>
  )
}