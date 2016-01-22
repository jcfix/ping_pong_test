// Business logic //

// 1st Script for errorInput //
var errorInput = function(number){
  var output = [];

  if (isNaN(number) || (number === "")) {
    output.push("error message");
  }
  return output;
};


// Script for countUp //
function countUp(number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    numberArray.push(i);
  }
  return numberArray;
 };




//  Script for pingPong//
function pingPong(number) {
  var endNumber = number
  if (number % 5 === 0 && number % 3 === 0) {
    return "pingpong";
  } else if (number % 5 === 0) {
  return "pong";
  } else if ( number % 3 === 0) {
  return "ping";
  }
  return endNumber;
};
