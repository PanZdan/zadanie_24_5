const calculateDistancePoints = (distance, hillSize, kPoint) => {
  const difference = distance - kPoint;

  if( typeof distance !== 'number' || typeof hillSize !== 'string' || typeof kPoint !== 'number') {

    return "wrong type of parameter"

  } else {

    switch (hillSize) {
      case "normal":
        return 60 + difference * 2;
      break;
      case "large":
        return 60 + difference * 1.8;
      break;
      case "sky flying":
        return 120 + difference * 1.2;
      break;
      default:
        return "wrong type of hillSize"
    }
  }
};

module.exports = calculateDistancePoints;
