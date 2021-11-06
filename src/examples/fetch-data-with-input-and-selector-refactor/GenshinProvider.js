import * as React from "react";
import { filteredCharacters$, search$, selected$ } from "./store";

export const GenshinContext = React.createContext({
  filteredCharacters$,
  search$,
  selected$,
});

export const useGenshin = () => React.useContext(GenshinContext);

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
