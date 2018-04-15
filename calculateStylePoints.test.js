const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  describe('styleNotes', () => {
    it('should return when four notes the same', () => {
      const styleNotes = [19.5, 19.5, 19.5, 19.5, 19.0];
        
      const actual = calculateStylePoints(styleNotes);
    
      const expected = '58.5';
    
      assert.equal(actual, expected);
    });
    it('should return when styleNotes is different', () => {
      const styleNotes = [18.5, 18.0, 19.5, 15.5, 20.0];
        
      const actual = calculateStylePoints(styleNotes);
    
      const expected = '56';
    
      assert.equal(actual, expected);
    });
    it('should return when styleNotes repeat', () => {
      const styleNotes = [15.5, 15.5, 19.5, 19.5, 15.5];
        
      const actual = calculateStylePoints(styleNotes);
    
      const expected = '50.5';
    
      assert.equal(actual, expected);
    });
  });
});