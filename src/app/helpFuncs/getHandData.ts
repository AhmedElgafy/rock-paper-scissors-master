import handsData from "../Data/handsData";

const getHandData = (choose: string | number) => {
  switch (choose) {
    case "rock":
      return handsData.rock;
    case "paper":
      return handsData.paper;
    case "scissors":
      return handsData.scissors;
    case "lizard":
      return handsData.lizard;
    case "spock":
      return handsData.spock;
  }
};
export default getHandData;
