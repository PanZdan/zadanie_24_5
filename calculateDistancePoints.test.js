const assert = require('assert');

const calculateDistancePoints = require('./calculateDistancePoints');

describe('Distance test for hillSize', () => {
  describe('normal', () => {
    it('should return points for a jump before kPoint', () => {
      const actual = calculateDistancePoints(85, 'normal', 90 );

      const expected = '50';

      assert.equal(actual, expected);

    });

    it('should return points for a jump after kPoint', () => {
      const actual = calculateDistancePoints(120, 'normal', 90);

      const expected = '120';

      assert.equal(actual, expected);
    });

    it('should return points for a jump on kPoint', () => {
      const actual = calculateDistancePoints(90, 'normal', 90);

      const expected = '60';

      assert.equal(actual, expected);
    });
  }); 

  describe('large', () => {
    it('should return points for a jump before kPoint', () => {
      const actual = calculateDistancePoints(95, 'large', 120 );

      const expected = '15';

      assert.equal(actual, expected);
    });

    it('should return points for a jump after kPoint', () => {
      const actual = calculateDistancePoints(140, 'large', 120);

      const expected = '96';

      assert.equal(actual, expected);
    });

    it('should return points for a jump on kPoint', () => {
      const actual = calculateDistancePoints(120, 'large', 120);

      const expected = '60';

      assert.equal(actual, expected);
    });
  });

  describe('sky flying', () => {
    it('should return points for a jump before kPoint', () => {
      const actual = calculateDistancePoints(131.5, 'sky flying', 200 );

      const expected = '37.8';

      assert.equal(actual, expected);
    });

    it('should return points for a jump after kPoint', () => {
      const actual = calculateDistancePoints(240, 'sky flying', 200);

      const expected = '168';

      assert.equal(actual, expected);
    });

    it('should return points for a jump on kPoint', () => {
      const actual = calculateDistancePoints(200, 'sky flying', 200);

      const expected = '120';

      assert.equal(actual, expected);
    });
  });
});