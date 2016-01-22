describe('errorInput', function() {
  it("will handle empty space input errors with an error message", function(){
    expect(errorInput("")).to.eql(["error message"]);
  });
});

describe('pingPong', function(){
  it ("will display the number that is entered by the user", function() {
    expect(pingPong(25)).to.equal(25);
  });
  it ("will display the sequence of numbers starting with 1 and ending with the number that is entered by the user", function() {
    expect(pingPong(50)).to.equal(50);
  });
  it ("will replace numbers divisible by three and five with 'ping pong'", function() {
    expect(pingPong(15)).to.equal('ping pong');
  });
});
