import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import GameContent from "./GameContent";
import HeaderNav from "./HeaderNav";
import Rules from "./Rules";
import PlayAgain from "./playAgain";

export default function Header() {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);

  return (
    <div
      className={`flex flex-col w-[90%] ${
        gameChoice != "" && "gap-5 mt-"
      } mx-auto `}
    >
      <h1
        className={` ${gameChoice != "" && "hidden"} 
         pb-4  text-center 
        font-BarlowSemiCondensed 
        font-medium text-white `}
      >
        {"Choose which one do you want to play".toUpperCase()}
      </h1>
      <HeaderNav />
      <GameContent />
      <PlayAgain />
      <Rules />
    </div>
  );
}
