const { input } = require('./input');

const totalCaloriesPerElfSorted = input.map((elfMeal) => {
  return elfMeal.split('\n')
    .map((foodItem) => parseInt(foodItem, 10))
    .reduce((a, b) => a + b, 0);
}).sort((a, z) => z - a);

console.log(totalCaloriesPerElfSorted)

module.exports = {
  totalCaloriesPerElfSorted,
};