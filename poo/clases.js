class Persona{
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    nombreCompleto(){
        return this._nombre+' '+this._apellido; 
    }
}

class Aprendiz extends Persona{
    constructor(nombre,apellido,programa,ficha){
        super(nombre,apellido);
        this._programa=programa;
        this._ficha=ficha;
    }
    get programa(){
        return this._programa;
    }
    set programa(programa){
        this._programa=programa;
    }

     get ficha(){
         return this._ficha;
     }
      set ficha(ficha){
          this._ficha=ficha;
      }

      setFicha(ficha){
          this._ficha=ficha;
      }
}

class Grupo{
    constructor(conjunto){
        this._conjunto=conjunto;
    }
}

var ap=new Aprendiz('Javier','Aguirre','ADSO','2254040');
var ap1=new Aprendiz('Tania','Arroyo','ADSO','2254040');
var migrupo=new Array();
migrupo.push(ap);
migrupo.push(ap1);

var clase=new Grupo(migrupo);


console.log(ap.nombreCompleto());
console.log(ap);
ap.setFicha('121212');
console.log(ap);
const per=new Persona('Angela','Lopez');
console.log(per.nombreCompleto());
console.log(per.apellido);
per.apellido='Sanchez';
console.log(per.nombreCompleto());
console.log(per.apellido);