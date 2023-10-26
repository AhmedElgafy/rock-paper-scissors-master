"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const Rules = () => {
  const gameChoice = useSelector((state: RootState) => state.gameChoice.value);

  const [rulesVisibly, setRulesVisibly] = useState(false);

  return (
    <div
      className={`${gameChoice == "" && "hidden"} z-10 md:absolute bottom-0
      right-[3%]  order-5`}
    >
      <h1
        className="text-white font-semibold
        flex items-center my-3 justify-center 
         text-center border-2 p-5 rounded-lg 
      border-[#606E85] w-32 h-10 mx-auto"
        onClick={() => setRulesVisibly(true)}
      >
        RULES
      </h1>
      <div
        className={`${!rulesVisibly && "hidden"}
         bg-white  p-3 rounded-md 
        fixed top-[50%] translate-y-[-50%]
      left-[50%]  translate-x-[-50%] flex items-center 
      justify-center w-screen h-screen z-[10] gap-64`}
      >
        <div>
          <h1
            className="text-DarkText font-bold 
          text-center text-3xl "
          >
            RULES
          </h1>
          <img
            src={
              gameChoice == "rockPaperScissor"
                ? "../image-rules.svg"
                : "../image-rules-bonus.svg"
            }
            className="my-14"
            alt=""
          />
          <h1
            className="text-DarkText cursor-pointer font-semibold 
          text-center mx-auto text-3xl"
            onClick={() => setRulesVisibly(false)}
          >
            x
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Rules;
