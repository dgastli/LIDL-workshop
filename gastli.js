var eleve= require('./dorra.js');

console.log(eleve.nom);
console.log(eleve.prenom);


var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];  //eviter la repition

console.log(unique(data));

var array = require('array'),
    users = array([1,2,3,4,5,6]);
    var chaine=users.join(chaine);
    console.log(chaine);
    var users1=users.slice(1,4);
    console.log(users1);
    var chaine1=users.toString();
    console.log(chaine1);
    users.pop();
    chaine=users.toString();
    console.log(chaine);
    users.reverse();
    chaine=users.toString();
    console.log(chaine);



var ecole={
  nbrEleve: 500,
  nbrEnseignant : 30,
  nbrClasse : 20,
  adresse : 'toulouse',

}
console.log('nbrElevecole = '+ecole.nbrEleve);
console.log('nbrClasse = '+ecole.nbrClasse);
console.log('nbrEnseignant = '+ecole.nbrEnseignant);
console.log('adresse = '+ecole.adresse);

function add(x,y){return x+y};

module.exports={
  addition:function(x,y){return x+y},

  ajouteCarres:function(a,b) {
   function carre(x) {
      return x * x;
   }
   return carre(a) + carre(b);
},

fc1:function(a,b,c,d){
  function soustraction(x,y){
    return x-y;
  }
  return soustraction(a,b)* soustraction(c,d);
},

fc2:function(a,b,c){
  var v1=add(a,b);
  return v1*c;
}

};
