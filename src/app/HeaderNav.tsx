import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import { setGameChoice } from "./Redux/slices/gameChoice";
import Link from "next/link";
import { setChoiceHand } from "./Redux/slices/choiceHand";

const HeaderNav = () => {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);
  const score = useSelector((state: RootState) => state.score.value);

  const dispatch = useDispatch();

  const resetBottom = () => {
    dispatch(setGameChoice(""));
    dispatch(setChoiceHand(""));
  };
  return (
    <>
      {gameChoice != "" && (
        <img
          className="w-5 mx-auto cursor-pointer order-1"
          onClick={() => resetBottom()}
          src="../../home_Icon.jpg"
          alt=""
        />
      )}

      <div
        className=" order-2 flex  gap-4 w-[100%]
         border-2 p-5 mb-9 md:mb-[3.25rem]
        rounded-lg my-16 mt-2
      border-[#606E85] items-center justify-between
       hsl(217, 16%, 45%)  mx-auto "
      >
        <img
          className={`block ${
            !gameChoice && "cursor-pointer"
          } w-[40%] md:w-[30%] ${
            gameChoice == "rockPaperScissorLizardSpock" ? "hidden" : "w-[40%]"
          }`}
          src="../../logo.svg"
          alt=""
          onClick={() => dispatch(setGameChoice("rockPaperScissor"))}
        />
        <img
          className={`block w-[40%] md:w-[30%] ${
            !gameChoice && "cursor-pointer"
          } ${gameChoice == "rockPaperScissor" && "hidden "}`}
          src="../../logo-bonus.svg"
          alt=""
          onClick={() => dispatch(setGameChoice("rockPaperScissorLizardSpock"))}
        />
        <div
          className={`border-2 
         bg-white rounded-lg 
       text-center 
       text-white font-semibold p-3
       
        ${gameChoice == "" && "hidden"}`}
        >
          <p
            className=" text-[#8697E4] text-xs
           font-extrabold"
          >
            SCORE
          </p>
          <p
            className="text-[#3B4363]
           text-4xl font-bold"
          >
            {score}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
