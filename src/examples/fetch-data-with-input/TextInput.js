import { search$, useObserverable } from "./store";

const SearchInput = () => {
  const search = useObserverable(search$, "");

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
