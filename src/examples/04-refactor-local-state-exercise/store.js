import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { last, split, uniqueId } from "lodash";

const initialState = {
  data: {
    filteredCharacters: [],
    searchInput: "",
    selected: [],
  },
  operations: {},
};

const GenshinContext = createContext(initialState);

export const useGenshin = () => useContext(GenshinContext);

const GENSHIN_API = "https://api.genshin.dev";

const fetchCharacters = async () => {
  const resp = await fetch(`${GENSHIN_API}/characters`)
  const allEntities = await resp.json();

  const allCharacters = allEntities.filter((entityName) => !RegExp("traveler").test(entityName))
  const promises = allCharacters.map(async (entitiyName) => {
    const characterResp = await fetch(`${GENSHIN_API}/characters/${entitiyName}`)
    const info = await characterResp.json()
    const imgSrc = `${GENSHIN_API}/characters/${entitiyName}/icon`
    return {
      ...info,
      img_src: imgSrc
    }
  })

  const allData = await Promise.all(promises);
  const onlyLastName = allData.map((character) => {
    const name = last(split(character.name, " "));
    return { ...character, name };
  })

  const withUniqId = onlyLastName.map((character) => ({ ...character, id: uniqueId() }))

  return withUniqId;
}

export const GenshinProvider = ({ children }) => {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState([]);

  const filteredCharactersRef = useRef(filteredCharacters)

  useEffect(() => {
    const execute = async () => {
      const characters = await fetchCharacters()
      setFilteredCharacters(characters)
      filteredCharactersRef.current = characters;
    }

    execute();
  }, [])
  
  useEffect(() => {
    if (filteredCharactersRef.current?.length > 0) {
      const filtered = filteredCharactersRef.current.filter((character) => {
        const term =
          character.name.toLowerCase() + character.vision.toLowerCase();
        return term.includes(searchInput.toLowerCase());
      })

      setFilteredCharacters(filtered)
    }
  }, [searchInput])

  useEffect(() => {
    if (filteredCharactersRef.current?.length > 0) {
      const characters = filteredCharactersRef.current.map((c) => ({ ...c, selected: selected.includes(c.id) }))
      setFilteredCharacters(characters)
    }
  }, [selected])

  const value = useMemo(() => {
    return {
      data: {
        filteredCharacters,
        searchInput,
        selected,
      },
      operations: {
        setFilteredCharacters,
        setSearchInput,
        setSelected,
      },
    };
  }, [filteredCharacters, searchInput, selected]);

  return <GenshinContext.Provider value={value}>{children}</GenshinContext.Provider>;
};
