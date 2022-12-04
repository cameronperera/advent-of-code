//     ROCK === A
//    PAPER === B
// SCISSORS === C

//    LOSE === X
//    DRAW === Y
//     WIN === Z

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

function getGameScore(result) {
  switch (result) {
    case 'X': // LOSE GAME
      return 0;
    case 'Y': // DRAW GAME
      return 3;
    default: // WIN GAME
      return 6;
  }
}

function getWinningSymbol(losingPick) {
  switch (losingPick) {
    case ROCK:
      return PAPER;
    case PAPER:
      return SCISSORS;
    case SCISSORS:
    default:
      return ROCK;
  }
}

function getLosingSymbol(winningPick) {
  switch (winningPick) {
    case ROCK:
      return SCISSORS;
    case PAPER:
      return ROCK;
    case SCISSORS:
    default:
      return PAPER;
  }
}

function getMyPick(elfPick, score) {
  if (score === 3) {
    return elfPick;
  }
  else if (score === 6) {
    return getWinningSymbol(elfPick);
  }
  else
    return getLosingSymbol(elfPick);

}

function pickSymbol(pick) {
  switch (pick) {
    case 'A':
      return ROCK;
    case 'B':
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
  const gameScore = getGameScore(round[2]);
  const myPick = getMyPick(elfPick, gameScore);
  const pickScore = myPickScore(myPick);
  // const matchScoreTotal = matchScore(elfPick, myPick);
  return pickScore + gameScore;
}).reduce((a, b) => a + b, 0);

console.log(totalScore);