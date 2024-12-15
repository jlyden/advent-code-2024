import { getFileContents } from '../utilities/files.mjs';
import { sortAsc, transformStringToArray, trimEmptyLinesFromArray } from '../utilities/general.mjs';

const sampleData = `
3   4
4   3
2   5
1   3
3   9
3   3`;

function buildListsFromInput(rawInput) {
  const lines = trimEmptyLinesFromArray(rawInput);
  const leftList = [];
  const rightList = [];
  lines.forEach(line => {
    const [left, right] = line.split('   ');
    leftList.push(left);
    rightList.push(right);
  });
  return [leftList, rightList];
}

/**
 * Solution for Puzzle One
 */
function solvePuzzleOne(input) {
  const [leftList, rightList] = buildListsFromInput(input);

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

/**
 * Solution for Puzzle Two
 */
function solvePuzzleTwo(input) {
  const [leftList, rightList] = buildListsFromInput(input);

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

function runPuzzles() {
  const sampleInput = transformStringToArray(sampleData, '\n');
  const fileInput = transformStringToArray(getFileContents('day-one.txt'));
  
  console.log(solvePuzzleOne(sampleInput)); // expected: 11
  console.log(solvePuzzleOne(fileInput));   // expected: 3246517
  
  console.log(solvePuzzleTwo(sampleInput)); // expected: 31
  console.log(solvePuzzleTwo(fileInput));   // expected: 29379307
}

runPuzzles();