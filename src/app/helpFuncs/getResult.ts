import { useDispatch } from "react-redux";
import rulesMap from "../Data/rulesMap";
import { decreaseScore, increaseScore } from "../Redux/slices/score";
const getResult = (choiceHand: string, compChoice: string) => {
  const dispatch = useDispatch();
  console.log(choiceHand + "-----" + compChoice);
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
export default getResult;
