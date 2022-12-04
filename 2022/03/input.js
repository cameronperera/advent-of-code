const path = require('path');
const fs = require('fs');

const rucksacks = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');

module.exports = {
  rucksacks,
};