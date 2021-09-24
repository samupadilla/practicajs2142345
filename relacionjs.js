//var x=prompt('Ingrese un número');
//document.write(x+" al cuadrado es"+(x*x));

var vec1=[];
var vec=new Array();
console.log(vec.length);//cantidad de elementos que tiene un arreglo
vec.push(100);//insertar un dato en el arreglo
console.log(vec.length);
vec.push('hola');
console.log(vec.length);

var tam=prompt('Cuantos datos quiere almacenar');
for (let i = 0; i < tam; i++) {
    vec1.push(Math.round(Math.random()*100));
    //vec[i]=Math.round(Math.random()*100);
}

llenar(vec,20);
console.log(vec1.join());