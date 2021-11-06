import TextInput from "./TextInput";
import {
  filteredCharacters$,
  selected$,
  useObserverable,
} from "./store";

const Card = ({ imgSrc, name, vision, id, selected }) => {
  const handleSelect = () => {
    if (selected$.value.includes(id)) {
      selected$.next(selected$.value.filter((selectedId) => selectedId !== id));
    } else {
      selected$.next([...selected$.value, id]);
    }
  };

  return (
    <div onClick={handleSelect} className={selected ? 'selected' : 'unselected'}>
      <img width={106} height={106} src={imgSrc} alt="card" />
      <div className="card-info">
        <p>{name}</p>
        <p>{vision}</p>
      </div>
    </div>
  );
};

const GenshinInfo = () => {
  const filteredCharacters = useObserverable(filteredCharacters$, []);
  
  return (
    <div>
      <TextInput />
      <div className="genshin-cards-icons">
        {filteredCharacters.map(
          ({ img_src, name, vision, id, selected }) => (
            <Card
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
