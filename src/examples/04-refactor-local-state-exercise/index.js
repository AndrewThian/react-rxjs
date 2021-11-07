import GenshinInfo from "./GenshinInfo";
import { GenshinProvider } from "./store";

const GenshinApp = () => {
  return (
    <GenshinProvider>
      <GenshinInfo />
    </GenshinProvider>
  );
};

export default GenshinApp;
