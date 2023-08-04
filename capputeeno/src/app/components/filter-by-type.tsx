import { useFilter } from "../hook/useFilter";
import { FilterType } from "../types/filter-types";
import { FilterItemAll } from "./filter-item-all";
import { FilterItemMug } from "./filter-item-mug";
import { FilterItemShirt } from "./filter-item-shirt";

interface FilterByTypeProps {
  selected?: boolean;
}

export default function FilterByType({
  selected,
  ...props
}: FilterByTypeProps) {
  const { type, setType } = useFilter();


  return (
    <>
      <ul className="text-dark flex gap-10 justify-center items-center">
        <FilterItemAll selected={type === FilterType.ALL} />
        <FilterItemShirt selected={type === FilterType.SHIRT} />
        <FilterItemMug selected={type === FilterType.MUG} />
      </ul>
    </>
  );
}
