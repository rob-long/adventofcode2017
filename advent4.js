const fs = require('fs');

function validPassphrase(anagram) {
  const data = fs.readFileSync('./input.txt', 'utf8');
  if (anagram) {
    return data.trim().split('\n')
      .map(line => line.split(' ').map(word => word.split('').sort().join('')))
      .filter(phrase => new Set(phrase).size === phrase.length).length;
  }
  return data.trim().split('\n')
    .map(line => line.split(' '))
    .filter(phrase => new Set(phrase).size === phrase.length).length;
}

console.log(validPassphrase(1));
