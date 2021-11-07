import { useGenshin } from "./store";

const GenshinCard = ({ imgSrc, name, vision, id, selected }) => {
  const { data, operations } = useGenshin()
  
  const handleSelect = () => {
    if (data.selected.includes(id)) {
      operations.setSelected(data.selected.filter((selectedId) => selectedId !== id));
    } else {
      operations.setSelected([...data.selected, id]);
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