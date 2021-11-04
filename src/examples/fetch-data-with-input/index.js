import TextInput from "./TextInput";
import {
  filteredCharacters$,
  useObserverable
} from "./store";

const Card = ({ imgSrc, name, vision }) => (
  <div>
    <div className="card-info">
      <p>Name: {name}</p>
      <p>Vision: {vision}</p>
    </div>
    <img src={imgSrc} alt="card" />
  </div>
);

const GenshinInfo = () => {
  const filteredCharacters = useObserverable(filteredCharacters$, []);

  return (
    <div>
      <TextInput />
      <div className="genshin-cards">
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
