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

function rerunReportWithTolerance(levels, badLevel) {
  // Try removing level that failed
  const tryFirstLevels = [...levels];
  tryFirstLevels.splice(badLevel, 1);

  const tryFirstBadLevel = findBadLevel(tryFirstLevels);
  if (tryFirstBadLevel === null) {
    return true;
  }

  // Try removing first level (maybe it's an ASC/DESC thing)
  const trySecondLevels = [...levels];
  trySecondLevels.splice(0, 1);
  const trySecondBadLevel = findBadLevel(trySecondLevels);
  if (trySecondBadLevel === null) {
    return true;
  }

  // Try removing level under level that failed
  if (badLevel === 0) {
    return false;
  }

  const tryThirdLevels = [...levels];
  tryThirdLevels.splice(badLevel - 1, 1);
  const tryThirdBadLevel = findBadLevel(tryThirdLevels);
  if (tryThirdBadLevel === null) {
    return true;
  }

  return false;
}

/**
 * Solution for Puzzles
 */
function solvePuzzle(input, withTolerance = false) {
  const reports = trimEmptyLinesFromArray(input);
  let safeReportCount = 0;
  const badReports = [];

  reports.forEach(report => {
    const levels = report.split(' ').map((value) => parseInt(value));

    const badLevel = findBadLevel(levels);
    if (badLevel === null) {
      safeReportCount ++;
    } else if (withTolerance) {
      const tryAgainSuccess = rerunReportWithTolerance(levels, badLevel);
      if (tryAgainSuccess) {
        safeReportCount ++;
      } else {
        badReports.push(levels)
      }
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
  console.log(solvePuzzle(fileInput, withTolerance));   // 641 is too low
}

/* if you want to run passing tests, comment out `runPuzzles();` below */
//runPuzzles();

export { solvePuzzle };