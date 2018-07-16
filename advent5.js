const fs = require('fs');

function run(part2) {
  const data = fs.readFileSync('./input5.txt', 'utf8');
  let array = data
    .trim()
    .split('\n')
    .map(j => parseInt(j));
  let steps = 0;
  let i = 0;
  while (i < array.length && i >= 0) {
    const next = i + array[i];
    part2 && array[i] >= 3 ? array[i]-- : array[i]++;
    i = next;
    steps++;
  }
  return steps;
}

console.log(run(1));
