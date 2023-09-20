import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
const handsData = {
  paper: {
    name: "paper",
    outColor: "hsl(230, 89%, 62%)",
    imgSrc: "../icon-paper.svg",
    inColor: "hsl(229.8, 47.169811320754725%,41.568627450980394%)",
  },
  scissors: {
    name: "scissors",
    outColor: "hsl(39, 89%, 49%)",
    imgSrc: "icon-scissors.svg",
    inColor: "hsl(40.16949152542374,73.75%, 31.372549019607842%)",
  },
  rock: {
    name: "rock",
    outColor: "#DC2E4E",
    imgSrc: "../icon-rock.svg",
    inColor: "#5f252f",
  },
};

const GamePlay = () => {
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);
  const compChoice = ["rock", "paper", "scissors"];
  const getHandData = (choose: string | number) => {
    switch (choose) {
      case "rock":
        return handsData.rock;
        break;
      case "paper":
        return handsData.paper;
        break;
      case "scissors":
        return handsData.scissors;
        break;
    }
  };
  const isAnyHandChose = () => {
    return choiceHand != "";
  };
  const [ranNumber, setRanNumber] = useState(
    Math.floor(Math.random() * 100) % 3
  );
  useEffect(
    () => setRanNumber(Math.floor(Math.random() * 5) % 3),
    [choiceHand]
  );
  console.log(ranNumber);
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
            outColor={getHandData(compChoice[ranNumber])?.outColor}
            inColor={getHandData(compChoice[ranNumber])?.inColor}
            imgSrc={getHandData(compChoice[ranNumber])?.imgSrc}
            choice={choiceHand}
          />
        </div>
      </div>
    </>
  );
};

export default GamePlay;
