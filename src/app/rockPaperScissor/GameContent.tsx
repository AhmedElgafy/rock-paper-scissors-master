// import Circle from "./Circle";
import { useSelector } from "react-redux";
import GamePlay from "./GamePlay";
import GameOption from "./gameOption";
import PlayAgain from "./playAgain";
import { RootState } from "../Redux/store";

const GameContent = () => {
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);

  return (
    <>
      {choiceHand && <GamePlay />}
      <GameOption />
    </>
  );
};
export default GameContent;
