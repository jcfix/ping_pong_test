//  errorInput Function//
describe('errorInput', function() {
  it("will handle empty space input errors with an error message", function(){
    expect(errorInput("")).to.eql(["error message"]);
  });
});


// countUp Function //
describe("countUp", function() {
  it("will count up to a user's number by 1 starting at 1 and put the numbers into an array", function() {
    expect(countUp(2)).to.eql([1,2]);
  });
});


// pingPong Function //
describe('pingPong', function() {
  it ("will display the number that is entered by the user", function() {
    expect(pingPong(58)).to.equal(58);
  });
  it ("will replace numbers divisible by 3 and 5 with pingpong", function() {
    expect(pingPong(15)).to.equal("pingpong");
  });
  it ("will replace numbers divisible by 5 with pong", function() {
    expect(pingPong(25)).to.equal("pong");
  });
  it ("will replace numbers divisible by 3 with ping", function() {
    expect(pingPong(12)).to.equal("ping");
  });
});






//  Logic //
// If a number between 1-userInput % 3 === 0 //
  // Return "ping" //
  // Else if a number between 1-userInput % 5 === 0 //
  // Return "pong" //
  // Else if a number between 1-userInput % 15 === 0 //
  // Return "ping pong" //
// Else, return number //
