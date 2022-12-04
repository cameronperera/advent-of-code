const { totalCaloriesPerElfSorted } = require('./part-01');

console.log(totalCaloriesPerElfSorted.slice(0, 3).reduce((sum, v) => sum + v, 0))