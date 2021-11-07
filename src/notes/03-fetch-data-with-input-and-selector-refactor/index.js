import { GenshinProvider } from "./GenshinProvider";
import GenshinInfo from "./GeshinInfo";

const GenshinApp = () => {
  return (
    <GenshinProvider>
      <GenshinInfo />
    </GenshinProvider>
  );
};

export default GenshinApp;
