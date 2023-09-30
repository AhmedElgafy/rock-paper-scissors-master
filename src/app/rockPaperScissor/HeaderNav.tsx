import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setGameChoice } from "../Redux/slices/gameChoice";
import getResult from "../helpFuncs/getResult";
import Link from "next/link";

const HeaderNav = () => {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);
  const compChoice = useSelector((state: RootState) => state.compChoice.value);
  // const winLose=useSelector((state: RootState) => state..value);
  const score = useSelector((state: RootState) => state.score.value);

  const dispatch = useDispatch();
  return (
    <div
      className="  flex gap-4 border-2 p-5 mb-10 rounded-lg 
      border-[#606E85] items-center justify-between
       hsl(217, 16%, 45%)  w-[90%] mx-auto"
    >
      <img
        className={`block w-[50%] ${
          gameChoice == "rockPaperScissorLizardSpock" ? "hidden" : "w-[40%]"
        }`}
        src="../../logo.svg"
        alt=""
        onClick={() => dispatch(setGameChoice("rockPaperScissor"))}
      />
      <Link href={"./rockPaperScissorLizardSpock"}>
        <img
          className={`block ${gameChoice == "rockPaperScissor" && "hidden "}`}
          src="../../logo-bonus.svg"
          alt=""
          onClick={() => dispatch(setGameChoice("rockPaperScissorLizardSpock"))}
        />
      </Link>
      <div
        className={`border-2 
        py-1 px-5 bg-white rounded-lg 
       text-center
       text-white font-semibold 
        ${gameChoice == "" && "hidden"}`}
      >
        <p className=" text-[#8697E4] text-xs font-extrabold">SCORE</p>
        <p className="text-[#3B4363] text-4xl">{score}</p>
      </div>
    </div>
  );
};

export default HeaderNav;
