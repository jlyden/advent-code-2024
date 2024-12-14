import assert from 'node:assert';
import { describe, it } from 'node:test';
import { solvePuzzleOne } from '../solutions/day-two.mjs';

describe('solvePuzzleOne', () => {
  describe('expect failure', () => {
    const expectedFailureResult = 0;

    describe('ASC line', () => {
      it('is inconsistent', () => {
        const testData = ['1 2 5 3 4 8'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedFailureResult, actual);
      })

      it('with dup value', () => {
        const testData = ['1 2 4 4 5 6'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedFailureResult, actual);
      })

      it('with value jump == 4', () => {
        const testData = ['1 2 3 7 8'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedFailureResult, actual);
      })
    })

    describe('DESC lines', () => {
      it('is inconsistent', () => {
        const testData = ['9 7 6 8 5 4'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedFailureResult, actual);
      })

      it('with dup value', () => {
        const testData = ['8 7 6 6 5 4'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedFailureResult, actual);
      })

      it('with value jump == 4', () => {
        const testData = ['9 8 4 3 2 1'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedFailureResult, actual);
      })
    })
  })

  describe('expect success', () => {
    const expectedSuccessResult = 1;

    describe('ASC lines', () => {
      it('is consistent and value jump = 1', () => {
        const testData = ['1 2 3 4 5'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedSuccessResult, actual);
      })

      it('with value jump == 2', () => {
        const testData = ['1 2 4 5 6 7'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedSuccessResult, actual);
      })

      it('with value jump == 3', () => {
        const testData = ['1 2 5 6 7 9'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedSuccessResult, actual);
      })
    })

    describe('DESC lines', () => {
      it('is consistent and value jump = 1', () => {
        const testData = ['9 8 7 6 5 4'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedSuccessResult, actual);
      })

      it('with value jump == 2', () => {
        const testData = ['9 8 6 5 4 3'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedSuccessResult, actual);
      })

      it('with value jump == 3', () => {
        const testData = ['9 8 5 4 3 2 1'];
        const actual = solvePuzzleOne(testData);
        assert.strictEqual(expectedSuccessResult, actual);
      })
    })
  })
})
