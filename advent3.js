// http://adventofcode.com/2017/day/3

function distance(num) {
  for (let slen = 1; slen < 1000; slen += 2) {
    if (slen * slen > num) {
      const ringNum = Math.floor(slen / 2);
      const distance = centers(slen).reduce((acc, curr, i) => {
        const d = Math.abs(curr - num);
        return d < acc ? d : acc;
      }, 10000000);
      return distance + ringNum;
    }
  }
  return 0;
}

function centers(slen) {
  const corner = slen * slen;
  const first = corner - Math.floor(slen / 2);
  let result = [first];
  for (var i = 1; i < 4; i++) {
    result.push(first - i * (slen - 1));
  }
  return result;
}

console.log(distance(325489));
