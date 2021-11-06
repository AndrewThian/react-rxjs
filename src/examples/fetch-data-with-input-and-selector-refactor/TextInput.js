import { useObserverable } from "../fetch-data-with-input-and-selector-refactor/store";
import { useGenshin } from "./GenshinProvider";

const SearchInput = () => {
  const { search$ } = useGenshin()
  const search = useObserverable(search$, '')
  
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          search$.next(value);
        }}
      />
    </div>
  );
};

export default SearchInput;
