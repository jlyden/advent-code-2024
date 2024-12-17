import assert from 'node:assert';
import { describe, it } from 'node:test';
import { solvePuzzle } from '../solutions/day-two.mjs';

/**
 * NOTE: Tests will not run successfully unless `runPuzzles();`
 * is commented out in solutions/day-two.mjs
 * // last one i checked:  [ 10, 17, 19, 20, 26 ]
 */
describe('solvePuzzle', () => {
  describe('without tolerance', () => {
    describe('expect failure', () => {
      const expectedFailureResult = 0;
  
      describe('ASC line', () => {
        it('is inconsistent', () => {
          const testData = ['1 2 5 3 4 8'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
  
        it('with dup value in middle', () => {
          const testData = ['1 2 4 4 5 6'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
  
        it('with dup value at very end', () => {
          const testData = ['3 4 5 7 8 9 9'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
  
        it('with dup value at very end, double digits', () => {
          const testData = ['80 82 84 85 86 88 90 91 92 94 94'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
  
        it('with random dups in middle', () => {
          const testData = ['33 34 35 37 38 38 39 41 43'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
  
        it('with value jump == 4', () => {
          const testData = ['1 2 3 7 8'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
      })
  
      describe('DESC lines', () => {
        it('is inconsistent', () => {
          const testData = ['9 7 6 8 5 4'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
  
        it('with dup value', () => {
          const testData = ['8 7 6 6 5 4'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
  
        it('with dup value at very end', () => {
          const testData = ['94 91 88 87 86 82 80 80'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
  
        it('with random dups', () => {
          const testData = ['38 39 38 37 34 34 33 33'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
  
        it('with value jump == 4', () => {
          const testData = ['9 7 6 2 1'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedFailureResult, actual);
        })
      })
    })
  
    describe('expect success', () => {
      const expectedSuccessResult = 1;
  
      describe('ASC lines', () => {
        it('is consistent and value jump = 1', () => {
          const testData = ['1 2 3 4 5'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedSuccessResult, actual);
        })
  
        it('is consistent and value jump = 1 with double digits', () => {
          const testData = ['9 10 11 12 13 14 15'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedSuccessResult, actual);
        })
  
        it('with value jump == 2', () => {
          const testData = ['1 2 4 5 6 7'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedSuccessResult, actual);
        })
  
        it('with value jump == 3', () => {
          const testData = ['1 2 5 6 7 9'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedSuccessResult, actual);
        })
      })
  
      describe('DESC lines', () => {
        it('is consistent and value jump = 1', () => {
          const testData = ['9 8 7 6 5 4'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedSuccessResult, actual);
        })
  
        it('with value jump == 2', () => {
          const testData = ['9 8 6 5 4 3'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedSuccessResult, actual);
        })
  
        it('with value jump == 3', () => {
          const testData = ['9 8 5 4 3 2 1'];
          const actual = solvePuzzle(testData);
          assert.strictEqual(expectedSuccessResult, actual);
        })
      })
    })
  })

  describe('with tolerance', () => {
    const withTolerance = true;

    describe('expect failure', () => {
      const expectedFailureResult = 0;

      it('when there are too many consistency issues', () => {
        const testData = ['78 81 78 80 81 83 85 83'];
        const actual = solvePuzzle(testData, withTolerance);
        assert.strictEqual(expectedFailureResult, actual);
      })

      it('when you fix consistency, but a big jump remains', () => {
        const testData = ['63 65 68 70 72 75 72 79'];
        const actual = solvePuzzle(testData, withTolerance);
        assert.strictEqual(expectedFailureResult, actual);
      })

      it('when you fix a jump, but consistency issues remain', () => {
        const testData = ['67 72 74 76 75 77 78'];
        const actual = solvePuzzle(testData, withTolerance);
        assert.strictEqual(expectedFailureResult, actual);
      })

      it('when there are multiple dup values', () => {
        const testData = ['85 88 88 90 92 94 94'];
        const actual = solvePuzzle(testData, withTolerance);
        assert.strictEqual(expectedFailureResult, actual);
      })
    })

    describe('expect success', () => {
      const expectedSuccessResult = 1;

      it('when removing one value fixes consistency', () => {
        const testData = ['8 11 9 11 14'];
        const actual = solvePuzzle(testData, withTolerance);
        assert.strictEqual(expectedSuccessResult, actual);
      })

      it('when initial order does not match rest of line', () => {
        const testData = ['48 46 47 49 51 54 56'];
        const actual = solvePuzzle(testData, withTolerance);
        assert.strictEqual(expectedSuccessResult, actual);
      })
    })
  })
})
