import { useGenshin } from "./GenshinProvider";

const GenshinCard = ({ imgSrc, name, vision, id, selected }) => {
  const { selected$ } = useGenshin()
  
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

export default GenshinCard;