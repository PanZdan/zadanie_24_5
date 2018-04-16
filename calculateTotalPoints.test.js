const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

const styleNotes = [18.5, 18.0, 19.5, 15.5, 20.0];


describe('Total test for hillSize', () => {
  describe('normal', () => {
    it('should return 127.4', () => {

      const actual = calculateTotalPoints(100, 'normal', 90, styleNotes, 3.1, - 11.7 );

      const expected = '127.4';

      assert.equal(actual, expected);
    });
  });
  describe('large', () => {
    it('should return 82.5', () => {

      const actual = calculateTotalPoints(100, 'large', 120, styleNotes, 4.2, - 1.7 );

      const expected = '82.5';

      assert.equal(actual, expected);
    });
  });
  describe('sky flying', () => {
    it('should return 62.1', () => {

      const actual = calculateTotalPoints(100, 'sky flying', 200, styleNotes, 3.6, 2.5 );

      const expected = '62.1';

      assert.equal(actual, expected);
    });
  });
  describe('sky flying', () => {
    it('should return when windFactor is not a number', () => {

      const actual = calculateTotalPoints(100, 'sky flying', 200, styleNotes, "3.6", 2.5 );

      const expected = 'wrong type of windFactor';

      assert.equal(actual, expected);
    });
  });
});