import * as React from "react";
import { useObserverable } from "../fetch-data-with-input-and-selector-refactor/store";
import { filteredCharacters$, search$, selected$ } from "./store";

export const GenshinContext = React.createContext({
  filteredCharacters$,
  search$,
  selected$,
});

export const useGenshin = () => React.useContext(GenshinContext);

export const useSearch = () => {
  const { search$ } = useGenshin();
  const search = useObserverable(search$, "");
  return [search, search$];
};

export const useSelected = () => {
  const { selected$ } = useGenshin();
  const selected = useObserverable(selected$, []);
  return [selected, selected$];
};

export const useFiltered = () => {
  const { filteredCharacters$ } = useGenshin();
  const filteredCharacters = useObserverable(filteredCharacters$, []);
  return [filteredCharacters, filteredCharacters$];
};

export const GenshinProvider = ({ children }) => {
  const data = React.useMemo(
    () => ({
      filteredCharacters$,
      search$,
      selected$,
    }),
    []
  );

  return (
    <GenshinContext.Provider value={data}>{children}</GenshinContext.Provider>
  );
};
