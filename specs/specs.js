//  errorInput Function//
describe('errorInput', function() {
  it("will handle empty space input errors with an error message", function(){
    expect(errorInput("")).to.eql(["error message"]);
  });
});


// pingPong Function //
describe('pingPong', function(){
  it ("will display the number that is entered by the user", function() {
    expect(pingPong(25)).to.equal(25);
  });
});


// countTo Function //
describe('countTo', function(){
  it("will count to the user's number by starting at 1, and in increments of 1, and will display the sequence in an array", function() {
    expect(countTo(6)).to.equal(1,2,3,4,5,6);
  });
});

//   it ("will display the sequence of numbers starting with 1 and ending with the number that is entered by the user", function() {
//     expect(pingPong(50)).to.equal(50);
//   });
//
//
//   it ("will replace numbers divisible by three and five with 'ping pong'", function() {
//     expect(pingPong(15)).to.equal("ping pong");
//   });
// });


//  Logic //
// If a number between 1-userInput % 3 === 0 //
  // Return "ping" //
  // Else if a number between 1-userInput % 5 === 0 //
  // Return "pong" //
  // Else if a number between 1-userInput % 15 === 0 //
  // Return "ping pong" //
// Else, return number //
