var fonction= require('./gastli.js');
console.log(fonction.addition(3,5));
console.log(fonction.addition(-1,5));
console.log(fonction.ajouteCarres(2,3)); // renvoie 13
console.log(fonction.ajouteCarres(3,4)); // renvoie 25
console.log(fonction.ajouteCarres(4,5)); // renvoie 41
console.log(fonction.fc1(6,4,2,2)); // renvoie 41
console.log(fonction.fc2(6,4,2)); // renvoie 41

//typage
var nb = 42;
var txt = 'foo';
console.log('nb : ', typeof nb);
console.log('txt : ', typeof txt);

var resultat = nb+txt;
console.log('resultat : ', typeof resultat);
console.log('nb : ', typeof nb);
console.log('txt : ', typeof txt);
