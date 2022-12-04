//     ROCK === A or X
//    PAPER === B or Y
// SCISSORS === C or Z

//     ROCK === 1 point
//    PAPER === 2 points
// SCISSORS === 3 points

//     WIN === 6 point
//    DRAW === 3 points
//    LOSE === 0 points

const { rounds } = require('./input');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

function matchScore(elfPick, myPick) {
  if (elfPick === myPick)
    return 3;
  else if (myPick === ROCK)
    return elfPick === SCISSORS ? 6 : 0
  else if (myPick === PAPER)
    return elfPick === ROCK ? 6 : 0
  else
    return elfPick === PAPER ? 6 : 0
}

function pickSymbol(pick) {
  switch (pick) {
    case 'A':
    case 'X':
      return ROCK;
    case 'B':
    case 'Y':
      return PAPER;
    default:
      return SCISSORS;
  }
}

function myPickScore(pick) {
  switch (pick) {
    case ROCK:
      return 1;
    case PAPER:
      return 2;
    default:
      return 3;
  }
}

const totalScore = rounds.map((round) => {
  const elfPick = pickSymbol(round[0]);
  const myPick = pickSymbol(round[2]);
  const pickScore = myPickScore(myPick);
  const matchScoreTotal = matchScore(elfPick, myPick);
  return pickScore + matchScoreTotal;
}).reduce((a, b) => a + b, 0);

console.log(totalScore);