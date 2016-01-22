describe('errorInput', function() {
  it("will return error message if empty input is submitted", function(){
    expect(errorInput("")).to.equal("errorMessage")
  });
});
