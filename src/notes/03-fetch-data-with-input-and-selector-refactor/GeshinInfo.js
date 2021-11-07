import TextInput from "./TextInput";
import GenshinCard from "./GenshinCard";
import { useGenshin } from "./GenshinProvider";
import { useObserverable } from "./store";

const GenshinInfo = () => {
  const { filteredCharacters$ } = useGenshin();
  const filteredCharacters = useObserverable(filteredCharacters$, []);

  return (
    <div>
      <TextInput />
      <div className="genshin-cards-icons">
        {filteredCharacters.map(({ img_src, name, vision, id, selected }) => (
          <GenshinCard
            key={id}
            imgSrc={img_src}
            name={name}
            vision={vision}
            id={id}
            selected={selected}
          />
        ))}
      </div>
    </div>
  );
};

export default GenshinInfo;
