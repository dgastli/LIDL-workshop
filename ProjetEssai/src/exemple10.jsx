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



var MyGriddle = React.createClass({

  getInitialState:function(){
    return {data:[{"Nom":1,"Prenom":1}]};
  },

  onClick:function(){
    console.log("Ok");
    // this.setState({data:fakeData.map(function(x){
    //   var y = x;
    //   y.Nom = "AA" + x.Nom ;
    //   return y;
    // })});

    var ancien = this.state.data;

    ancien.push({
      "Nom":ancien[ancien.length-1].Nom+1,
      "Prenom":ancien[ancien.length-1].Prenom+2,
    });

    this.setState({data:ancien});
  },

  render: function () {
    return (
      <div>

        <Griddle results={this.state.data}/>
        <button onClick={this.onClick}> OK </button>

      </div>
    );
  }
});

React.render(
    <MyGriddle />,
    document.getElementById('example')
);
