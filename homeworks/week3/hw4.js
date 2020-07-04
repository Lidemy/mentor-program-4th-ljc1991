/* eslint-disable linebreak-style, eol-last, no-plusplus */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function reverse(str) {
  let strReverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  return strReverse;
}

function solve(input) {
  const str = input[0];
  if (str === reverse(str)) {
    console.log('True');
  } else {
    console.log('False');
  }
}

rl.on('close', () => {
  solve(lines);
});