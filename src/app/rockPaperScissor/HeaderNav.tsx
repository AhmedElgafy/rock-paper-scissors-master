import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setGameChoice } from "../Redux/slices/gameChoice";

const HeaderNav = () => {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);
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
      <img
        className={`block ${gameChoice == "rockPaperScissor" && "hidden "}`}
        src="../../logo-bonus.svg"
        alt=""
        onClick={() => dispatch(setGameChoice("rockPaperScissorLizardSpock"))}
      />
      <div
        className={`border-2 
        py-1 px-5 bg-white rounded-lg 
       text-center
       text-white font-semibold 
        ${gameChoice == "" && "hidden"}`}
      >
        <p className=" text-[#8697E4] text-xs font-extrabold">SCORE</p>
        <p className="text-[#3B4363] text-4xl">0</p>
      </div>
    </div>
  );
};

export default HeaderNav;
