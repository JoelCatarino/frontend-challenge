import { useFilter } from "../hook/useFilter";
import { FilterType } from "../types/filter-types";

interface FilterByTypeProps {
  selected: boolean
}

export function FilterItemAll({selected}: FilterByTypeProps) {

  const { type, setType } = useFilter();
  
  const handleChangeType = (value: FilterType) => {
    setType(value);
  };
  
  return (
    <>
        <li onClick={() => handleChangeType(FilterType.ALL) } className="uppercase text-center">Todos os produtos</li>
    </>
  )
}