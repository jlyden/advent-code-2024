import { getFileContents } from '../utilities/files.mjs';
import { transformStringToArray, trimEmptyLinesFromArray } from '../utilities/general.mjs';

const sampleData = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

function isAscending(a, b) {
  return a < b;
}

function isSafeLevelChange(a, b) {
  const change = Math.abs(a - b);
  return 0 < change && change < 4;
}

function findBadLevel(levels) {
  if (!isSafeLevelChange(levels[0], levels[1])) {
    return 0;
  }

  const rowIsAsc = isAscending(levels[0], levels[1]);
  const maxIter = levels.length;
  for (let i = 2; i < maxIter; i++) {
    if (!isSafeLevelChange(levels[i-1], levels[i])) {
        return i;
    }

    if (isAscending(levels[i-1], levels[i]) !== rowIsAsc) {
      return i;
    }
  }

  return null;
}

/**
 * Solution for Puzzles
 */
function solvePuzzle(input, withTolerance = false) {
  const reports = trimEmptyLinesFromArray(input);
  let safeReportCount = 0;

  reports.forEach(report => {
    const levels = report.split(' ').map((value) => parseInt(value));
    if (findBadLevel(levels) === null) {
      safeReportCount ++;
    }
  });

  return safeReportCount;
}

function runPuzzles() {
  const sampleInput = transformStringToArray(sampleData, '\n');
  const fileInput = transformStringToArray(getFileContents('day-two.txt'));

  console.log(solvePuzzle(sampleInput)); // expected: 2
  console.log(solvePuzzle(fileInput));   // expected 606

  // Puzzle 2 is not solved
  const withTolerance = true; // for Puzzle Two
  console.log(solvePuzzle(sampleInput, withTolerance)); // expected: 4
  console.log(solvePuzzle(fileInput, withTolerance));   // 637 is too low
}

/* if you want to run passing tests, comment out `runPuzzles();` below */
runPuzzles();

export { solvePuzzle };