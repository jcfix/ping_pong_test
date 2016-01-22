// Business logic //

// errorInput //
var errorInput = function(number){
  var output = [];

  if (isNaN(number) || (number === "")) {
    output.push("error message");
  }
  return output;
};


// pingPong  //

var pingPong = function (number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      numberArray.push("pingpong");
    }
    else if (i % 5 === 0) {
      numberArray.push("pong");
    }
    else if (i % 3 === 0) {
      numberArray.push("ping");
    }
    else {
      numberArray.push(i)
    }
  }
  return numberArray;
};








// User-interface Logic //
$(document).ready(function() {
  $(".btn#getNumber").click(function(){
    var number = parseInt($("input#userNumber").val());

    if (number <=0 ) {
      alert("That won't do! How about a number greater than or equal to 1?")
    }
    $("ul").empty();
    var returnedArray = pingPong(number);

    for (var i = 0; i < returnedArray.length; i++) {
      var listItem = document.createElement("li");
      listItem.innerHTML = returnedArray[i];
      var numberList = document.getElementById("numArray");
      numberList.appendChild(listItem);
    }

    $("#listofNumbers").show();

  });
});
