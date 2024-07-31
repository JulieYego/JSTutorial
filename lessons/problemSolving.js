// PROBLEM 1:
// Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// What is amplitude (highest - lowest)
// What happens when there is a error
// How to get max and min

// Ignore errors
// find max
// find min
// subtract and return it

const calcTempAplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > maxTemp) {
      maxTemp = currentTemp;
    }
    if (currentTemp < minTemp) {
      minTemp = currentTemp;
    }
  }
  return maxTemp - minTemp;
};

console.log(calcTempAplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

const calcTempAplitudeConcat = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > maxTemp) {
      maxTemp = currentTemp;
    }
    if (currentTemp < minTemp) {
      minTemp = currentTemp;
    }
  }
  return maxTemp - minTemp;
};

console.log(calcTempAplitudeConcat([10, 20, 30], [40, 50, 60]));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius :')),
    value: 10,
  };

  //   console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const calcTempAplitudeBug = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);
  let maxTemp = 0;
  let minTemp = 0;
  for (let i = 1; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    // debugger;
    if (currentTemp > maxTemp) {
      maxTemp = currentTemp;
    }
    if (currentTemp < minTemp) {
      minTemp = currentTemp;
    }
  }
  return maxTemp - minTemp;
};

console.log(calcTempAplitudeBug([3, 5, 1], [9, 4, 5]));
