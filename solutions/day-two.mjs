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

function isSafeReport(levels) {
  if (!isSafeLevelChange(levels[0], levels[1])) {
    return false;
  }

  const rowIsAsc = isAscending(levels[0], levels[1]);
  const maxIter = levels.length - 1;
  for (let i = 2; i < maxIter; i++) {
    if (!isSafeLevelChange(levels[i-1], levels[i])) {
      return false;
    }

    if (isAscending(levels[i-1], levels[i]) !== rowIsAsc) {
      return false;
    }
  }

  return true;
}

/**
 * Solution for Puzzle One
 */
function solvePuzzleOne(input) {
  const reports = trimEmptyLinesFromArray(input);
  let safeReports = 0;
  reports.forEach(report => {
    const levels = report.split(' ').map((value) => parseInt(value));
    if (isSafeReport(levels)) {
      safeReports ++;
    }
  });

  return safeReports;
}

//const sampleInput = transformStringToArray(sampleData, '\n');
//const fileInput = transformStringToArray(getFileContents('day-two.txt'));

//console.log(solvePuzzleOne(sampleInput)); // expected: 2
//console.log(solvePuzzleOne(fileInput));   // 619 is too low

export { solvePuzzleOne };