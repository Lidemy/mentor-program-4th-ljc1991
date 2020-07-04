/* eslint-disable linebreak-style, eol-last, no-plusplus */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function printStar(n) {
  let s = '';
  for (let i = 0; i < n; i++) {
    s += '*';
  }
  console.log(s);
}

function solve(input) {
  const count = Number(input[0]);
  for (let i = 1; i <= count; i++) {
    printStar(i);
  }
}

rl.on('close', () => {
  solve(lines);
});