//FUNCIONES FLECHA
// No adecuadas como métodos y no sirven como constructores
//SINTAXIS: (param1,param2, ...,paramN) => {sentencias}
//          (param1,param2, ...,paramN) => expresión
//          () => {return expresión}
//Paréntesis opcionales cuando hay un solo parámetro
//          (parametro)=>{sentencias}
//           parametro => {sentencias}
//Paréntesis obligatorios si la función no tiene parámetros
//          ()=> {sentencias

function saludo1(){
    return 'hola';
}

console.log('...'+saludo1());

function saludo2(){
    console.log('hola');
}
saludo2();

var greet1=()=>console.log('hola');
var greet2=()=>'Hola desde flecha';
console.log('------'+greet2());
// funciones con un parametro

function cuad(num){
return num*num;
}
const cuadrado=num=>num*num;
console.log(cuadrado(10));
//funcion con mas de un parámetro
function suma(x,y){
return x+y;
}

const sum=(x,y)=>x+y;
console.log(sum(10,20));

