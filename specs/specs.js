describe('errorInput', function() {
  it("will handle empty space input errors with an error message", function(){
    expect(errorInput("")).to.eql(["error message"]);
  });
  it ("will display the number that is entered by the user", function() {
    expect(pingPong(25)).to.equal(25);
  });
});
