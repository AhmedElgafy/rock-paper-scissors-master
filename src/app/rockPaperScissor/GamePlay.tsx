import React, { useEffect } from "react";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
import getHandData from "../helpFuncs/getHandData";
import Circle from "./Circle";
import PlayAgain from "./playAgain";
import getResult from "../helpFuncs/getResult";
import Celebrating from "./Celebration";

const GamePlay = () => {
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);
  const compChoice = useSelector((state: RootState) => state.compChoice.value);

  const isAnyHandChose = () => {
    return choiceHand != "";
  };

  return (
    <>
      <div
        className={`order-3 grid grid-cols-4
         gap-2 justify-items-center ${!isAnyHandChose() && "hidden"} `}
      >
        <div
          className="col-start-1 
        col-span-2
        md:col-span-1 md:col-start-1"
        >
          <p
            className="text-center md:text-sm text-xs mb-2 text-white font-bold
            tracking-wide font-BarlowSemiCondensed
          "
          >
            YOU PICKED
          </p>

          <div
            className="bg-DarkText relative
           flex items-center md:w-44
        justify-center rounded-full w-32 col-start-1 
        col-span-2
        md:col-span-1 md:col-start-1
        "
          >
            {getResult(choiceHand, compChoice) == "you win" && <Celebrating />}
            <Circle
              width="w-auto"
              outColor={getHandData(choiceHand)?.outColor}
              inColor={getHandData(choiceHand)?.inColor}
              imgSrc={getHandData(choiceHand)?.imgSrc}
              choice={choiceHand}
            />
          </div>
        </div>
        {choiceHand != "" && <PlayAgain />}
        <div
          className="col-start-3 
         col-span-2  md:w-44 h-auto 
          md:col-span-1
          md:col-start-4"
        >
          <p
            className="text-center mb-2 text-white md:text-sm
             text-xs font-bold tracking-wide
              font-BarlowSemiCondensed
          "
          >
            THE HOUSE PICKED
          </p>
          <div
            className="bg-DarkText relative
         rounded-full w-32 col-start-3 
         col-span-2  md:w-44 h-auto  md:col-span-1
          md:col-start-4"
          >
            {getResult(choiceHand, compChoice) == "you lose" && <Celebrating />}
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
      </div>
    </>
  );
};

export default GamePlay;
