import { useFilter } from "../hook/useFilter";
import { FilterType } from "../types/filter-types";

interface FilterByTypeProps {
  selected: boolean
}

export function FilterItemMug({selected}: FilterByTypeProps) {
  
  const { type, setType } = useFilter();
  
  const handleChangeType = (value: FilterType) => {
    setType(value);
  };
  
  return (
    <>
        <li onClick={() => handleChangeType(FilterType.MUG) } className="uppercase text-center">Canecas</li>
    </>
  )
}