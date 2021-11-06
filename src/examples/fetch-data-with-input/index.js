import TextInput from "./TextInput";
import { filteredCharacters$, useObserverable } from "./store";

const Card = ({ imgSrc, name, vision }) => (
  <div>
    <img width={106} height={106} src={imgSrc} alt="card" />
    <div className="card-info">
      <p>{name}</p>
      <p>{vision}</p>
    </div>
  </div>
);

const GenshinInfo = () => {
  const filteredCharacters = useObserverable(filteredCharacters$, []);

  return (
    <div>
      <TextInput />
      <div className="genshin-cards-icons">
        {filteredCharacters.map(({ img_src, name, vision }) => (
          <Card
            key={`${vision}_${name}`}
            imgSrc={img_src}
            name={name}
            vision={vision}
          />
        ))}
      </div>
    </div>
  );
};

export default GenshinInfo;
