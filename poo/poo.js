//4ta forma de crear objetos en JS
class Person{    
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    miNombreCompleto(){
        return this.nombre+' '+this.apellido;
    }
}

var p1=new Person('Andrea','Valdiri');
console.log(p1.miNombreCompleto());
var p3=new Person();
p3.nombre='Viviana';
p3.apellido='Gonzalez';
console.log(p3.miNombreCompleto());
//3ra forma para crear objetos en JS

//var plantilla=function(){//No tengo acceso a los datos
function Persona(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
    this.nombreCompleto=function(){
        return this.nombre+' '+this.apellido;
    }
}
var obfunction=new Persona('alex','castro');
var o1=new Persona('jhon','suarez');
console.log(o1.nombre);
var o2=new Persona('Gladys','Merchan');
var o3=new Persona('Valentina','Mor');
console.log(typeof(o3));
console.log(obfunction.nombre);
console.log(obfunction.nombreCompleto());

//2da forma para crear objetos en JS
//JSON formato clave:valor
var obj={
 nombre:'Luis',
 apellido:'Cifuentes',
 nombreCompleto:function(){
     return this.nombre+' '+this.apellido;
 }
};
console.log(obj.nombre);
console.log(obj['nombre']);
console.log(obj.apellido);
console.log(obj.nombreCompleto());
obj.telefono='301333333';
console.log(obj);
delete obj.apellido;
console.log(obj);
obj.nombre='Juan Luis';
console.log(obj)


//1ra forma de crear objetos en JS
//this= esta clase o este objeto
var ob=new Object();
ob.nombre='Alfonso';
ob.apellido='Lizarazo';
ob.nombreCompleto=function(){
    return this.nombre+' '+this.apellido;
}
console.log(ob.nombreCompleto())






//tipos de dato
 var x=3;
 console.log(typeof(x));
// var fecha=new Date();
// console.log(typeof(fecha));
// console.log(fecha);
// var z='hola';
// console.log(typeof(z));
// console.log(z);
