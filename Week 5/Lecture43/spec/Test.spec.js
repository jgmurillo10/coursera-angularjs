describe("test", function(){

  var x;
  var y;
  beforeEach(function() {
    dataGenerator = function() {
      return {
        'saludo': 'hola'
      }
    }
  });

  it("Should be hola ", function(){
    var result= detectData(dataGenerator);
    expect(result).toBe(true);
  });

});
