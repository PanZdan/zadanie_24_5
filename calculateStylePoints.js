const calculateStylePoints = styleNotes => {
  
  const minNotes = Math.min(...styleNotes);
  const maxNotes = Math.max(...styleNotes);

  const minIndex = styleNotes.filter(x => x == minNotes).length;
  const maxIndex = styleNotes.filter(x => x == maxNotes).length;

  const total = styleNotes.filter((x) => {
    return x !== minNotes && x !== maxNotes;
  });

  const points = total.reduce((a, b) => a + b, 0);

  return points + minNotes * (minIndex - 1) + maxNotes * (maxIndex - 1);
};

module.exports = calculateStylePoints;
