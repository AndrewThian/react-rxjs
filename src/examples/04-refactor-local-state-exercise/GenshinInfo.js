import TextInput from "./TextInput";
import GenshinCard from "./GenshinCard";
import { useGenshin } from "./store";

const GenshinInfo = () => {
  const { data } = useGenshin();

  return (
    <div>
      <TextInput />
      <div className="genshin-cards-icons">
        {data.filteredCharacters.map(({ img_src, name, vision, id, selected }) => (
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
