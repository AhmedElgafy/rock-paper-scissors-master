import React, { useEffect } from "react";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCompChoiceHand } from "../Redux/slices/compChoice";
import getHandData from "../helpFuncs/getHandData";
import Circle from "./Circle";

const GamePlay = () => {
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);
  const compChoice = useSelector((state: RootState) => state.compChoice.value);

  const isAnyHandChose = () => {
    return choiceHand != "";
  };

  return (
    <>
      <div
        className={`flex justify-center  gap-5 ${
          !isAnyHandChose() && "hidden"
        } `}
      >
        <div
          className="bg-DarkText flex items-center
        justify-center rounded-full w-32"
        >
          <Circle
            width="w-32"
            hight="h-32"
            outColor={getHandData(choiceHand)?.outColor}
            inColor={getHandData(choiceHand)?.inColor}
            imgSrc={getHandData(choiceHand)?.imgSrc}
            choice={choiceHand}
          />
        </div>
        <div
          className="bg-DarkText
        h-32 rounded-full w-32"
        >
          <Circle
            width="w-32"
            hight="h-32"
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
