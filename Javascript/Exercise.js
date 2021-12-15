export const EXPECTED_MINUTES_IN_OVEN = 40;

const PREPARATION_MINUTES_PER_LAYER = 2;

export function remainingMinutesInOven(actualMinutesInOven) {
    let remainingMinutesInOven = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
    return remainingMinutesInOven;
  }
  export function preparationTimeInMinutes(numberOfLayers) {
    let preparationTimeInMinutes = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
    return preparationTimeInMinutes;
  }
  export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    let totalTimeInMinutes = numberOfLayers * 2 + actualMinutesInOven;
    return totalTimeInMinutes;
  }
  