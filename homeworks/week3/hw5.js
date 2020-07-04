/* eslint-disable linebreak-style, eol-last, no-plusplus */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  for (let i = 1; i < input.length; i++) {
    const temp = input[i].split(' ');
    const A = temp[0];
    const B = temp[1];
    const K = temp[2];

    if (K === '1') {
      if (A.length > B.length || (A.length === B.length && A > B)) {
        console.log('A');
      } else if (B.length > A.length || (A.length === B.length && B > A)) {
        console.log('B');
      } else {
        console.log('DRAW');
      }
    }

    if (K === '-1') {
      if (A.length < B.length || (A.length === B.length && A < B)) {
        console.log('A');
      } else if (B.length < A.length || (A.length === B.length && B < A)) {
        console.log('B');
      } else {
        console.log('DRAW');
      }
    }
  }
}

rl.on('close', () => {
  solve(lines);
});