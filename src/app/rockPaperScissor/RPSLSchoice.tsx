import React from "react";
import { useDispatch } from "react-redux";
import { setChoiceHand } from "../Redux/slices/choiceHand";
import { setCompChoiceHand } from "../Redux/slices/compChoice";
import Circle from "./Circle";
import getHandData from "../helpFuncs/getHandData";

const RPSLSchoice = () => {
  const dispatch = useDispatch();
  const handleClick = (name: string): void => {
    dispatch(setChoiceHand(name));
    dispatch(setCompChoiceHand());
  };
  return (
    <div>
      <div
        className="absolute 
        bottom-0
        translate-y-[50%]
        w-[45%]
        "
        onClick={() => handleClick("rock")}
      >
        <Circle
          width="0"
          outColor={"#DC2E4E"}
          inColor="#5f252f"
          imgSrc="../icon-rock.svg"
          choice="rock"
        />
      </div>
      <div
        className="absolute top-0 
        translate-x-[-50%]
        translate-y-[50%]
        w-[45%]
        z-[5]"
        onClick={() => handleClick("scissors")}
      >
        <Circle
          width="0"
          // hight="h-28"
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
         left-[50%]
         w-[45%]
         translate-x-[-50%]
         translate-y-[-50%]
        "
        onClick={() => handleClick("paper")}
      >
        <Circle
          width="0"
          // hight="h-28"
          outColor="hsl(230, 89%, 62%)"
          inColor="hsl(229.8, 47.169811320754725%,
               41.568627450980394%)"
          imgSrc="../icon-paper.svg"
          choice="paper"
        />
      </div>
      <div
        className="absolute
        w-[45%]
         top-0 
         right-0
        translate-x-[50%]
        translate-y-[50%]
        "
        onClick={() => handleClick("lizard")}
      >
        <Circle
          width="0"
          // hight="h-28"
          outColor={getHandData("lizard")?.outColor}
          inColor={getHandData("lizard")?.inColor}
          imgSrc={getHandData("lizard")?.imgSrc}
          choice={getHandData("lizard")?.name}
        />
      </div>
      <div
        className="absolute
         bottom-0
         translate-y-[50%]
         right-0
         w-[45%]
        "
        onClick={() => handleClick("spock")}
      >
        <Circle
          width="0"
          // hight="h-28"
          outColor={getHandData("spock")?.outColor}
          inColor={getHandData("spock")?.inColor}
          imgSrc={getHandData("spock")?.imgSrc}
          choice={getHandData("spock")?.name}
        />
      </div>
    </div>
  );
};

export default RPSLSchoice;
