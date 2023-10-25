import React, { useEffect } from "react";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
import getHandData from "../helpFuncs/getHandData";
import Circle from "./Circle";
import PlayAgain from "./playAgain";
import Celebration from "./Celebration";

const GamePlay = () => {
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);
  const compChoice = useSelector((state: RootState) => state.compChoice.value);

  const isAnyHandChose = () => {
    return choiceHand != "";
  };

  return (
    <>
      <div
        className={`order-3 grid grid-cols-4 gap-2 justify-items-center ${
          !isAnyHandChose() && "hidden"
        } `}
      >
        <div
          className="bg-DarkText relative flex items-center md:w-44
        justify-center rounded-full w-32 col-start-1 col-span-2
        md:col-span-1 md:col-start-1
        "
        >
          <Celebration key={1} opacity={"opacity-[.05]"} size={"scale-[.5]"} />
          <Celebration key={2} opacity={"opacity-[.06]"} size={"scale-[.6]"} />
          <Celebration key={3} opacity={"opacity-[.07]"} size={"scale-[.7]"} />
          <Circle
            width="w-auto"
            outColor={getHandData(choiceHand)?.outColor}
            inColor={getHandData(choiceHand)?.inColor}
            imgSrc={getHandData(choiceHand)?.imgSrc}
            choice={choiceHand}
          />
        </div>
        {choiceHand != "" && <PlayAgain />}
        <div
          className="bg-DarkText 
         rounded-full w-32 col-start-3 col-span-2  md:w-44 h-auto  md:col-span-1 md:col-start-4"
        >
          <Circle
            width="w-auto"
            // hight="h-32"
            outColor={getHandData(compChoice)?.outColor}
            inColor={getHandData(compChoice)?.inColor}
            imgSrc={getHandData(compChoice)?.imgSrc}
            choice={compChoice}
          />
        </div>
      </div>
    </>
  );
};

export default GamePlay;
