import TextInput from "./TextInput";
import GenshinCard from "./GenshinCard";
import { useFiltered } from "./GenshinProvider";

const GenshinInfo = () => {
  const [filteredCharacters] = useFiltered();
  
  return (
    <div>
      <TextInput />
      <div className="genshin-cards-icons">
        {filteredCharacters.map(
          ({ img_src, name, vision, id, selected }) => (
            <GenshinCard
              key={id}
              imgSrc={img_src}
              name={name}
              vision={vision}
              id={id}
              selected={selected}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GenshinInfo;
