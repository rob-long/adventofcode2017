const fs = require('fs');

function seenArray(array, history) {
  return history.some(oldState => {
    if (oldState.join() === array.join()) {
      console.log('saw ', array);
      return true;
    }
    return false;
  });
}

function cycle(array) {
  const idx = array.reduce((acc, curr, i) => {
    if (curr > array[acc]) {
      return i;
    }
    return acc;
  }, 0);
  const blocksToDistribute = array[idx];
  array[idx] = 0;
  for (let count = idx; count < blocksToDistribute + idx; count++) {
    let position = (count + 1) % array.length;
    array[position]++;
  }
  return array;
}

function run() {
  const data = fs.readFileSync('./input6.txt', 'utf8');
  let array = data
    .trim()
    .split('\t')
    .map(i => parseInt(i));
  // array = [0, 2, 7, 0];

  let history = [];
  while (!seenArray(array, history)) {
    history.push(array.slice());
    cycle(array, history);
  }

  history = [];
  while (!seenArray(array, history)) {
    history.push(array.slice());
    cycle(array, history);
  }
  return history.length;
}

console.log(run());

const array = [2, 5, 8, 10, 1];
const idx = array.reduce((acc, curr, i) => {
  if (curr > acc) {
    return i;
  }
  return acc;
}, 0);
console.log('idx', idx);
