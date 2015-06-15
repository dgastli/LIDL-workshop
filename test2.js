var myObject = {
 a : 1,
 b : 2,
 sum : function() {
  return this.a + this.b;
 }
};

console.log(myObject.sum());

// prototype
var Dog = function() {}; // declaring constructor
Dog.prototype;     // prints "{}" : prototype exists and is empty


Dog.prototype.bark = function() { // defining a method on the Dog prototype
 console.log("wouf wouf");
};

var bobby = new Dog();
bobby.bark(); // using the prototype declaration - prints "wouf wouf" to the console

var felix = new Dog();
console.log(bobby.bark == felix.bark);


var Ecole = function(){

};

Ecole.prototype.nbPersonnels= function(a,b){

  return a+b;
}

var enseeiht= new Ecole();
console.log(enseeiht.nbPersonnels(20,10));
var enseirb= new Ecole();
console.log(enseirb.nbPersonnels(60,70));


/*
var School ={
  nbrEleve: 500,
  nbrEnseignant :30
};

School.prototype.nbTotal= function(){
  return School.nbrEleve+School.nbrEnseignant;
}

var enseeiht1=new School();

console.log(enseeiht1.nbTotal());*/

Ecole.prototype.nbPersonnels= function(a,b){

  return a-b;
}
console.log(enseeiht.nbPersonnels(20,10));
console.log(enseirb.nbPersonnels(60,70));
