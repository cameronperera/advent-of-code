const { rucksacks } = require('./input');

const a_code = 'a'.charCodeAt();
const A_code = 'A'.charCodeAt();
const groupSize = 3;
let total = 0;

for (let i = 0; i < rucksacks.length; i += groupSize) {
  const group = rucksacks.slice(i, i + groupSize);
  const potentialMatches = group[0].split('').filter((item) => group[1].split('').includes(item))
  const match = potentialMatches.filter((item) => group[2].split('').includes(item))[0];
  if (match.toUpperCase() === match) {
    total += match.charCodeAt() - A_code + 27;
  } else {
    total += match.charCodeAt() - a_code + 1;
  }
}

console.log(total);