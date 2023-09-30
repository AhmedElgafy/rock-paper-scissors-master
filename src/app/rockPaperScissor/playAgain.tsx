import { useDispatch, useSelector } from "react-redux";
import { setChoiceHand } from "../Redux/slices/choiceHand";
import { RootState } from "../Redux/store";
import { setCompChoiceHand2Default } from "../Redux/slices/compChoice";
import rulesMap from "../Data/rulesMap";
import { decreaseScore, increaseScore } from "../Redux/slices/score";
import getResult from "../helpFuncs/getResult";
import { useEffect } from "react";

const palyAgain = () => {
  const dispatch = useDispatch();
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);
  const compChoice = useSelector((state: RootState) => state.compChoice.value);
  useEffect(() => {
    console.log("hi");
    getResult(choiceHand, compChoice) == "you win" && dispatch(increaseScore());
    getResult(choiceHand, compChoice) == "you lose" &&
      dispatch(decreaseScore());
  }, []);

  return (
    <div className={`${choiceHand == "" && "hidden"} z-10`}>
      <h1 className="text-white font-bold text-5xl my-3 text-center">
        {getResult(choiceHand, compChoice).toUpperCase()}
      </h1>
      <div
        onClick={() => {
          dispatch(setChoiceHand(""));
          // dispatch(setCompChoiceHand2Default());
        }}
      >
        <h1
          className="text-blue-900 bg-white font-semibold
  flex items-center justify-center 
  text-center border-2 p-5 rounded-lg 
  w-60 h-10 mx-auto  tracking-normal"
        >
          PLAY AGAIN
        </h1>
      </div>
    </div>
  );
};

export default palyAgain;
