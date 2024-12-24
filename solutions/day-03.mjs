import { getFileContents } from '../utilities/files.mjs';

function solvePuzzle(input) {
  let total = 0;

  const reg = /mul\(([1-9]{1,3}),([1-9]{1,3})\)/gm;
  const matches = input.matchAll(reg);
  matches.forEach(match => {
    total += (match[1] * match[2]);
  });      

  return total;
}

function runPuzzles() {
  const sampleInput = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
  const fileInput = getFileContents('day-03.txt');

  console.log(solvePuzzle(sampleInput));
  console.log(solvePuzzle(fileInput)); // 117235303 too low
}

runPuzzles();