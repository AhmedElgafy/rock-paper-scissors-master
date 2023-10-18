import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import GameContent from "./GameContent";
import HeaderNav from "../HeaderNav";
import Rules from "./Rules";
import PlayAgain from "./playAgain";
import PageLayout from "../layoutComps/pageLayout";

export default function Header() {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);

  return (
    <>
      <PageLayout>
        <h1
          className={` ${gameChoice != "" && "hidden"} 
         pb-4  text-center 
        font-BarlowSemiCondensed 
        font-medium text-white `}
        >
          {"Choose which one do you want to play".toUpperCase()}
        </h1>
        <HeaderNav />
        {gameChoice == "" ? null : <GameContent />}
        <Rules />
      </PageLayout>
    </>
  );
}
