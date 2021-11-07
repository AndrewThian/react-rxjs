import { debounce } from "lodash";
import { useEffect, useMemo, useRef } from "react";
import { useGenshin } from "./store";

const SearchInput = () => {
  const { operations } = useGenshin();

  const changeHandler = useRef((e) => {
    const value = e.target.value;
    operations.setSearchInput(value);
  });

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler.current, 300)
  , []);

  useEffect(() => {
    return () => debouncedChangeHandler.cancel();
  }, [debouncedChangeHandler]);

  return (
    <div>
      <input
        type="text"
        onChange={debouncedChangeHandler}
      />
    </div>
  );
};

export default SearchInput;
