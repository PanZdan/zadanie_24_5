const calculateDistancePoints = require("./calculateDistancePoints");
const calculateStylePoints = require("./calculateStylePoints");

const calculateTotalPoints = (
  distance,
  hillSize,
  kPoint,
  styleNotes,
  windFactor,
  gateFactor
) => {
  if (
    typeof windFactor !== "number" ||
    typeof gateFactor !== "number"
  ) {
    return "wrong type of parameter";
  }

  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  if (isFinite(distancePoints)) {
    return (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1);
  } else {
    return "wrong type of hillSize";
  }
};

module.exports = calculateTotalPoints;
