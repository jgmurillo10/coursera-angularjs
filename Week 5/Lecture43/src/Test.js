function detectData(data) {
  var input= data().saludo;
  if(input.toLowerCase().indexOf('hola')){
    return true;
  }
  return false;
}
