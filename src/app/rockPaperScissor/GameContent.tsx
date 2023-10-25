// import Circle from "./Circle";
import { useSelector } from "react-redux";
import GamePlay from "./GamePlay";
import GameOption from "./gameOption";
import PlayAgain from "./playAgain";
import { RootState } from "../Redux/store";

const GameContent = () => {
  return (
    <>
      <GamePlay />
      <GameOption />
    </>
  );
};
export default GameContent;
