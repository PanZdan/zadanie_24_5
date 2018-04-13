const calculateStylePoints = styleNotes => {
  const minNotes = Math.min(...styleNotes);
  const maxNotes = Math.max(...styleNotes);

  const min = styleNotes.filter(x => x == minNotes).length;
  const max = styleNotes.filter(x => x == maxNotes).length;

  const total = styleNotes.filter(x => {
    return x !== minNotes && x !== maxNotes;
  });

  total.reduce((a, b) => a + b);
};

module.exports = calculateStylePoints;
