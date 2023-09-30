import rulesMap from "../Data/rulesMap";
const getResult = (choiceHand: string, compChoice: string) => {
  if (rulesMap.get(choiceHand) == compChoice) {
    // dispatch(decreaseScore());
    return "you lose";
  }
  if (choiceHand == compChoice) {
    return "Draw";
  }
  // dispatch(increaseScore());
  return "you win";
};
export default getResult;
