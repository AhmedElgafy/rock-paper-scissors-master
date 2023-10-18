import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChoiceHand } from "../Redux/slices/choiceHand";
import rulesMap from "../Data/rulesMap";
import { RootState } from "../Redux/store";
import { decreaseScore, increaseScore } from "../Redux/slices/score";
import { setWinOrLoseOrDraw } from "../Redux/slices/winOrLoseOrDraw";
import { setCompChoiceHand } from "../Redux/slices/compChoice";
type CircleDataType = {
  outColor: string | undefined;
  inColor: string | undefined;
  imgSrc: string | undefined;
  choice: string | undefined;
  width: string | undefined;
  hight: string | undefined;
};

const Circle = ({
  choice,
  outColor,
  inColor,
  imgSrc,
  width,
  hight,
}: CircleDataType) => {
  const choiceHand = useSelector((state: RootState) => state.choiceHand.value);
  const compChoice = useSelector((state: RootState) => state.compChoice.value);
  const getResult = (choiceHand: string, compChoice: string) => {
    if (rulesMap.get(choiceHand) == compChoice) {
      dispatch(decreaseScore());
      return "you lose";
    }
    if (choiceHand == compChoice) {
      return "Draw";
    }
    dispatch(increaseScore());
    return "you win";
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    // getResult(choiceHand, compChoice) == "you win" && dispatch(increaseScore());
  };

  return (
    <>
      <div
        onClick={() => handleClick()}
        className={`relative ${
          width + " " + hight
        } mx-auto flex cursor-pointer items-center justify-center `}
      >
        <svg width="391" height="130" viewBox="0 0 391 411" fill="none">
          <circle cx="195.5" cy="215.5" r="195.5" fill={`${inColor}`} />
          <circle cx="195.5" cy="195.5" r="195.5" fill={`${outColor}`} />
          <circle cx="195.5" cy="195.5" r="152.5" fill="white" />
          {/* <image href={`${imgSrc}`} width={190} x={97.75} y={102.75} /> */}
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
          <path
            filter="url(#f1)"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M347.454 206.5C347.815 202.215 348 197.879
             348 193.5C348 109.277 279.723 41 195.5 41C111.277
              41 43 109.277 43 193.5C43 197.879 43.1846 202.215
               43.5463 206.5C50.1427 128.362 115.655 67 195.5 67C275.345
                67 340.857 128.362 347.454 206.5Z"
            fill="#BBBCD4"
          />
        </svg>
        <img src={`${imgSrc}`} className="absolute z-[10]" alt="" />
      </div>
    </>
  );
};
export default Circle;
