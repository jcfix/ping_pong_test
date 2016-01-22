describe('errorInput', function() {
  it("will handle empty space input errors with an error message", function(){
    expect(errorInput("")).to.eql(["error message"]);
  });
});
