import CookieDisplay from "./CookieDisplay";
import CookieButton from "./CookieButton";
import TextInput from "./TextInput";

const CookieCounter = () => {
  return (
    <div className="App">
      <CookieDisplay />
      <TextInput />
      <CookieButton />
    </div>
  );
};

export default CookieCounter;
