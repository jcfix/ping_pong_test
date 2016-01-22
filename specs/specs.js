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
  it ("will replace numbers divisible by 3 and 5 in the array with pingpong", function() {
    expect(pingPong(15)).to.equal("pingpong");
  });
  it ("will replace numbers divisible by 5 in the array with pong", function() {
    expect(pingPong(5)).to.equal("pong");
  });
  it ("will replace numbers divisible by 3 in the array with ping", function() {
    expect(pingPong(3)).to.equal("ping");
  });
});
