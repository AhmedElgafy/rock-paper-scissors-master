import rulesMap from "../Data/rulesMap";
const getResult = (
  choiceHand: string | undefined,
  compChoice: string | undefined
) => {
  //if compChoice beat choiceHand return you lose.
  if (rulesMap.get(choiceHand).find((ele: string) => ele == compChoice)) {
    return "you win";
  }
  if (choiceHand == compChoice) {
    return "Draw";
  }
  return "you lose";
};
export default getResult;
