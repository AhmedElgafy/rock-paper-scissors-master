//rock lose from paper.
//paper lose from Scissor.
//Scissor lose from rock.

const rulesMap = new Map();
//rock beat scissors,lizard
//paper beat rock,spock
//scissors beat paper,lizard
//spock beat rock,scissors
//lizard beat spock,paper

rulesMap.set("rock", ["scissors", "lizard"]);
rulesMap.set("paper", ["rock", "spock"]);
rulesMap.set("scissors", ["paper", "lizard"]);
rulesMap.set("spock", ["rock", "scissors"]);
rulesMap.set("lizard", ["spock", "paper"]);
console.log(rulesMap.get("lizard"));
export default rulesMap;
