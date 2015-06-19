var colors = require('colors');
var lodash_ = require('lodash');

var tableau1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var tableau2 = tableau1.map(function(num) {
  return 10 - num;
});

var tableau3 = tableau1.filter(function(num) {
  return num > 5
});

console.log(tableau1);
console.log(tableau2);
console.log(tableau3);

var compteur = 9;
do {
  console.log('coucou'.green);
  compteur--;
} while (compteur > 0);

var tableau4 = lodash_.map(tableau1, function(num) {
  return 10 - num;
});

console.log(tableau4);

module.exports = {
  nom: 'gastli',
  prenom: 'dorra'
};
