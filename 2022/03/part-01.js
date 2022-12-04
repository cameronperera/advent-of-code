const { rucksacks } = require('./input');

const typesTotal = rucksacks.map((rucksack) => {
  const a_code = 'a'.charCodeAt();
  const A_code = 'A'.charCodeAt();
  const compartmentOne = rucksack.slice(0, rucksack.length / 2).split('');
  const compartmentTwo = rucksack.slice(rucksack.length / 2).split('');
  const match = compartmentOne.filter((element) => compartmentTwo.includes(element))[0];
  if (match.toUpperCase() === match) {
    return match.charCodeAt() - A_code + 27;
  } else {
    return match.charCodeAt() - a_code + 1;
  }
});

console.log(typesTotal.reduce((a, b) => a + b, 0));