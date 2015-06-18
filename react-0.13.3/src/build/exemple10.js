var React = require('react');
var Griddle = require('griddle-react');

var fakeData =  [
{

  "Nom": "Gastli",
  "Prenom": "Dorra",
  "Age": "22",
  "Pays": "France",
  "Ville": "Toulouse",
  "id": 1
},
{
  "Nom": "Slama",
  "Prenom": "Sadok",
  "Age": "26",
  "Pays": "France",
  "Ville": "Limoges",
  "id": 2
},
{
  "Nom": "Gastli",
  "Prenom": "Taeib",
  "Age": "19",
  "Pays": "Tunisie",
  "Ville": "Nabeul",
  "id": 3
},
{
  "Nom": "Gastli",
  "Prenom": "Boubaker",
  "Age": "56",
  "Pays": "Tunisie",
  "Ville": "Nabeul",
  "id": 4
},
{
  "Nom": "Ben Hassine",
  "Prenom": "Amel",
  "Age": "55",
  "Pays": "Tunisie",
  "Ville": "Tazarka",
  "id": 5
},
{

  "Nom": "Gastli",
  "Prenom": "Dorra",
  "Age": "22",
  "Pays": "France",
  "Ville": "Toulouse",
  "id": 1
},
{
  "Nom": "Slama",
  "Prenom": "Sadok",
  "Age": "26",
  "Pays": "France",
  "Ville": "Limoges",
  "id": 2
},
{
  "Nom": "Gastli",
  "Prenom": "Taeib",
  "Age": "19",
  "Pays": "Tunisie",
  "Ville": "Nabeul",
  "id": 3
},
{
  "Nom": "Gastli",
  "Prenom": "Boubaker",
  "Age": "56",
  "Pays": "Tunisie",
  "Ville": "Nabeul",
  "id": 4
},
{
  "Nom": "Ben Hassine",
  "Prenom": "Amel",
  "Age": "55",
  "Pays": "Tunisie",
  "Ville": "Tazarka",
  "id": 5
},
{

  "Nom": "Gastli",
  "Prenom": "Dorra",
  "Age": "22",
  "Pays": "France",
  "Ville": "Toulouse",
  "id": 1
},
{
  "Nom": "Slama",
  "Prenom": "Sadok",
  "Age": "26",
  "Pays": "France",
  "Ville": "Limoges",
  "id": 2
},
{
  "Nom": "Gastli",
  "Prenom": "Taeib",
  "Age": "19",
  "Pays": "Tunisie",
  "Ville": "Nabeul",
  "id": 3
},
{
  "Nom": "Gastli",
  "Prenom": "Boubaker",
  "Age": "56",
  "Pays": "Tunisie",
  "Ville": "Nabeul",
  "id": 4
},
{
  "Nom": "Ben Hassine",
  "Prenom": "Amel",
  "Age": "55",
  "Pays": "Tunisie",
  "Ville": "Tazarka",
  "id": 5
},


];


var MyGriddle = React.createClass({displayName: "MyGriddle",

  render: function () {
    return (
      React.createElement("div", null,

        React.createElement(Griddle, {results: fakeData})

      )
    );
  }
});

React.render(
    React.createElement(MyGriddle, null),
    document.getElementById('example')
);
