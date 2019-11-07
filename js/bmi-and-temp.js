var bmi = function(weight, height) {
  return weight / (height * height);
};
var weight = parseInt(prompt("Enter your weight in kg:"));
var height = parseInt(prompt("Enter your height in meters:"));

alert(bmi(weight,height));

var tempF = function(tempC) {
  return tempC * (9/5) + 32;
}

var tempC = parseInt(prompt("What is the temperature in degrees C?"));
alert(tempF(tempC));
