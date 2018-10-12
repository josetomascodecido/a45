// Crear una función llamada sortList() la cual debe ser ejecutada al presionar el botón “Clasificar Arreglo”.
//
// La función debe iterar el arreglo:
//
// Si el elemento del array es un número impar debe ser agregado a la lista ‘Impares’.
// Si el elemento es un número par debe ser agregado a la lista ‘Pares’.
// Si el elemento es un string debe ser agregado a la lista ‘Strings’.
// Los elementos deben ser agregados de manera dinámica manipulando el DOM mediante JS.


var arr = [1,'dos','tres',4,5,6,'siete',8,9,'diez'];
var line = document.createElement("li")
var sortList =  function(){
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i]%2 == 0) {
      var pares = document.getElementById('par')
      var line = document.createElement("li")
      var node = document.createTextNode(arr[i])
      line.appendChild(node)
      pares.appendChild(line)
    }
    else if (typeof(arr[i]) === "string" ) {

      var pares = document.getElementById('string')
      var line = document.createElement("li")
      var node = document.createTextNode(arr[i])
      line.appendChild(node)
      pares.appendChild(line)

    }
    else{

      var pares = document.getElementById('impar')
      var line = document.createElement("li")
      var node = document.createTextNode(arr[i])
      line.appendChild(node)
      pares.appendChild(line)
      }
    }
}
