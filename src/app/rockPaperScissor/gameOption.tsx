import React from "react";
import Circle from "./Circle";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const GameOption = () => {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);
  // console.log(gameChoice);
  //   ${choiceHand == "" && "hidden"}}
  //
  const isRPSchose = () => {
    return gameChoice == "rockPaperScissor";
  };
  const isAnyHandChose = () => {
    return choiceHand != "";
  };

  return (
    <>
      <div
        className={`relative w-80 
        ${!isRPSchose() && "hidden"}
        ${isAnyHandChose() && "hidden"}
        mx-auto`}
      >
        <img className="mx-auto w-60" src="../bg-triangle.svg" alt="" />
        <div
          className="absolute 
        translate-x-[105px]
        translate-y-[-110px]"
        >
          <Circle
            width="w-28"
            hight="h-28"
            outColor="#DC2E4E"
            inColor="#5f252f"
            imgSrc="../icon-rock.svg"
            choice="rock"
          />
        </div>
        <div
          className="absolute top-0 
        translate-x-[35px]
        translate-y-[-30px]
        z-[10]"
        >
          <Circle
            width="w-28"
            hight="h-28"
            outColor="hsl(39, 89%, 49%)"
            inColor="hsl(40.16949152542374,
               73.75%, 31.372549019607842%)"
            imgSrc="icon-scissors.svg"
            choice="scissors"
          />
        </div>
        <div
          className="absolute
         top-0
         right-0
         translate-x-[-30px]
        translate-y-[-35px]
        "
        >
          <Circle
            width="w-28"
            hight="h-28"
            outColor="hsl(230, 89%, 62%)"
            inColor="hsl(229.8, 47.169811320754725%,
               41.568627450980394%)"
            imgSrc="../icon-paper.svg"
            choice="paper"
          />
        </div>
      </div>
    </>
  );
};

export default GameOption;
