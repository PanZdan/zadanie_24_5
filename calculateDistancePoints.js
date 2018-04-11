const calculateDistancePoints = (distance, hillSize, kPoint) => {
  const difference = distance - kPoint;

  switch (hillSize) {
    case "normal":
      return 60 + difference * 2;
    case "large":
      return 60 + difference * 1.8;
    case "sky flying":
      return 120 + difference * 1.2;
  }
};

module.exports = calculateDistancePoints;
