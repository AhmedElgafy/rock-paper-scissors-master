import React from "react";
import { useDispatch } from "react-redux";
import { setChoiceHand } from "../Redux/slices/choiceHand";
import { setCompChoiceHand } from "../Redux/slices/compChoice";
import Circle from "./Circle";

const SRP_choice = () => {
  const dispatch = useDispatch();
  const handleClick = (name: string): void => {
    dispatch(setChoiceHand(name));
    dispatch(setCompChoiceHand());
  };
  const circleWidth = "0";
  return (
    <>
      <div
        className="absolute
        w-[45%] 
        right-[50%]
        bottom-0
        translate-x-[50%]"
        onClick={() => handleClick("rock")}
      >
        <Circle
          width={circleWidth}
          outColor="#DC2E4E"
          inColor="#5f252f"
          imgSrc="../icon-rock.svg"
          choice="rock"
        />
      </div>
      <div
        className="absolute 
        w-[45%]
        top-0
        translate-y-[-30%]
        z-[10]"
        onClick={() => handleClick("scissors")}
      >
        <Circle
          width={circleWidth}
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
        w-[45%]
        right-0
        translate-y-[-30%]
        "
        onClick={() => handleClick("paper")}
      >
        <Circle
          width={circleWidth}
          outColor="hsl(230, 89%, 62%)"
          inColor="hsl(229.8, 47.169811320754725%,
               41.568627450980394%)"
          imgSrc="../icon-paper.svg"
          choice="paper"
        />
      </div>
    </>
  );
};

export default SRP_choice;
