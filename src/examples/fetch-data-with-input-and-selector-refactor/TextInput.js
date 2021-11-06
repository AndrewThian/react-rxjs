import { useSearch } from "./GenshinProvider";

const SearchInput = () => {
  const [search, search$] = useSearch()

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
