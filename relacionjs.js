//var x=prompt('Ingrese un número');
//document.write(x+" al cuadrado es"+(x*x));

var vec1 = [];
var vec = new Array();
console.log(vec.length); //cantidad de elementos que tiene un arreglo
vec.push(100); //insertar un dato en el arreglo
console.log(vec.length);
vec.push("hola");
console.log(vec.length);

//var tam=prompt('Cuantos datos quiere almacenar');
// for (let i = 0; i < tam; i++) {
//     vec1.push(Math.round(Math.random()*100));
//     //vec[i]=Math.round(Math.random()*100);
// }

vec = new Array();
llenarVector(vec, 5);
console.log(vec);
console.log("......" + vec.join());
console.log(sumaPares(vec));

//hoisting
function llenarVector(vector, tam) {
  for (let i = 0; i < tam; i++) {
    vector.push(Math.round(Math.random() * 100));
  }
  return vector;
}

var llenar = (vector, tam) => {
  for (let i = 0; i < tam; i++) {
    vector.push(Math.round(Math.random() * 100));
  }
  return vector;
}
v=new Array();

console.log(llenar(v,7));


function sumaPares(vector) {
  suma = 0;
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 == 0) {
      suma += vector[i];
    }
  }
  return suma;
}
