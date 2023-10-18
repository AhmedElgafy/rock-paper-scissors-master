import React from "react";
import Circle from "./Circle";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/store";
import { setChoiceHand } from "../Redux/slices/choiceHand";
import { setCompChoiceHand } from "../Redux/slices/compChoice";
import SRP_choice from "./srpChoice";
import RPSLSchoice from "./RPSLSchoice";

const GameOption = () => {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);
  const compChoice = useSelector((state: RootState) => state.compChoice.value);
  const dispatch = useDispatch();
  // console.log(gameChoice);
  //   ${choiceHand == "" && "hidden"}}
  //
  const imgSrc = () => {
    switch (gameChoice) {
      case "rockPaperScissor":
        return "../bg-triangle.svg";
      case "rockPaperScissorLizardSpock":
        return "../bg-pentagon.svg";
      default:
        return "";
    }
  };

  const isAnyHandChose = () => {
    return choiceHand != "";
  };

  return (
    <>
      <div
        className={`relative my-10 mb-20 w-[100%] 
        ${isAnyHandChose() && "hidden"}
        `}
      >
        <img className="mx-auto w-60 " src={imgSrc()} alt="" />

        {gameChoice == "rockPaperScissor" && <SRP_choice />}
        {gameChoice == "rockPaperScissorLizardSpock" && <RPSLSchoice />}
      </div>
    </>
  );
};

export default GameOption;
