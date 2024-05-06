const convertToCelsius = function(fahrenheit) {

  // x °F ≘ (x − 32) × 5 / 9°C
  // x - 32
  let farenheitLessThirtyTwo = fahrenheit - 32;
  // (x - 32) x 5
  let fiveTimesFahrenheitLessThirtyTwo = farenheitLessThirtyTwo * 5;
  // (x - 32 ) x 5 / 9
  let fiveTimesFahrenheitLessThirtyTwoDivideByNine = fiveTimesFahrenheitLessThirtyTwo / 9;
  // Round to 1 decimal place and convert back to number:
  return parseFloat(fiveTimesFahrenheitLessThirtyTwoDivideByNine.toFixed(1));

};

const convertToFahrenheit = function(celcius) {
  // 	x °C ≘ (x × 9 / 5 + 32) °F
  // x x 9
  let celciusTimesNine = celcius * 9;
  // (x x 9)/5
  let celciusTimesNineDivideByFive = celciusTimesNine / 5;
  // ((x x 9)/5) + 32
  let celciusTimesNineDivideByFivePlusThirtyTwo = celciusTimesNineDivideByFive + 32;
  // Round to 1 decimal place and convert back to number:
  return parseFloat(celciusTimesNineDivideByFivePlusThirtyTwo.toFixed(1));
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
