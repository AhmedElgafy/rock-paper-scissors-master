import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setChoiceHand } from "../Redux/slices/choiceHand";
import { RootState } from "../Redux/store";

const palyAgain = () => {
  const dispatch = useDispatch();
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);

  return (
    <div className={`${choiceHand == "" && "hidden"} z-10`}>
      <h1 className="text-white font-bold text-5xl my-3 text-center">
        YOU WIN
      </h1>
      <div
        onClick={() => {
          dispatch(setChoiceHand(""));
          console.log("clicked");
        }}
      >
        <h1
          className="text-blue-900 bg-white font-semibold
  flex items-center justify-center 
   text-center border-2 p-5 rounded-lg 
 w-60 h-10 mx-auto  tracking-normal"
          // onClick={}
        >
          PLAY AGAIN
        </h1>
      </div>
    </div>
  );
};

export default palyAgain;
