const CookieButton = ({ increment, decrement, reset }) => {
  return (
    <div>
      <button
        onClick={() => {
          increment()
        }}
      >
        click to get cookie
      </button>
      <button
        onClick={() => {
          decrement()          
        }}
      >
        click to eat cookie
      </button>
      <button
        onClick={() => {
          reset()
        }}
      >
        reset
      </button>
    </div>
  );
};

export default CookieButton;
