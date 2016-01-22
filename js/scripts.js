// Business logic //

// 1st Script for 1st Spec: Dealing with Invalid Input //
var errorInput = function(number){
  var output = [];

  if (isNaN(number) || (number === "")) {
    output.push("error message");
  }
  return output;
};


//  Script for 2nd Spec: Displaying userNumber //
function pingPong(number) {
  var endNumber = number
  return endNumber;
}


// Script for 3rd Spec: Displaying list of numbers //
// function pingPong(number) {
//   var endNumber = number
//
//   for (var i = 1; i <= number; i++) {
//
//     $("#listofNumbers").append("<li>" + i + "</li>");
//
//   }
//   return number;
//
// };


// Script for 4th Spec: Replace numbers % 3 & 5 with "ping pong"//
// function pingPong(number) {
//   var endNumber = number
//
//   for (var i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       $("#listofNumbers").append("<li>" + "ping pong" + "</li>");
//     }
//
//
//     $("#listofNumbers").append("<li>" + i + "</li>");
//
//   }
//   return number;
//
// }
