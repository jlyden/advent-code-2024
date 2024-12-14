import { getContents } from '../utilities/files.mjs';
import { sortAsc } from '../utilities/general.mjs';

const sampleData = `
3   4
4   3
2   5
1   3
3   9
3   3`

function getInput(useSample = true) {
  return useSample ? sampleData.split('\n') : getContents('day-one.txt');
}

function processInput(rawInput) {
  const lines = rawInput.filter((line) => line.length > 0);
  const leftList = [];
  const rightList = [];
  lines.forEach(line => {
    const [left, right] = line.split('   ');
    leftList.push(left);
    rightList.push(right);
  });
  return [leftList, rightList];
}

function solvePuzzleOne(useSample) {
  const input = getInput(useSample);
  const [leftList, rightList] = processInput(input);

  leftList.sort(sortAsc);
  rightList.sort(sortAsc);
  const listLength = leftList.length;
  
  let sumOfDiffs = 0;
  for (let i = 0; i < listLength; i++) {
    sumOfDiffs += Math.abs(leftList[i] - rightList[i]);
  }
  return sumOfDiffs;
}

function getListValueFrequencies(intList) {
  const listCounts = {}
  intList.forEach(value => {
    if (listCounts[value]) {
      listCounts[value] ++;
    } else {
      listCounts[value] = 1;
    }
  });

  return listCounts;
}

function solvePuzzleTwo(useSample) {
  const input = getInput(useSample);
  const [leftList, rightList] = processInput(input);

  leftList.sort(sortAsc);
  rightList.sort(sortAsc);

  const leftListFrequencies = getListValueFrequencies(leftList);
  const rightListFrequencies = getListValueFrequencies(rightList);

  let similarityScore = 0;
  for (const [key, leftFrequency] of Object.entries(leftListFrequencies)) {
    similarityScore += parseInt(key) * leftFrequency * (rightListFrequencies[key] ?? 0);
  }

  return similarityScore;
}

console.log(solvePuzzleOne(true));
console.log(solvePuzzleOne(false));

console.log(solvePuzzleTwo(true));
console.log(solvePuzzleTwo(false));