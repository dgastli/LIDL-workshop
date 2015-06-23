var React = require('react');
var Griddle = require('griddle-react');


var MyGriddle = React.createClass({

  getInitialState:function(){
    return {data:[{"Nom":"","Prenom":""}]};
  },

  onClick:function(){

    var ancien = this.state.data;

    ancien.push({
      "Nom":React.findDOMNode(this.refs.textareaNom).value,
      "Prenom":React.findDOMNode(this.refs.textareaPrenom).value,
    });

    this.setState({data:ancien});
    React.findDOMNode(this.refs.textareaNom).value = 'Entrez le Nom';
    React.findDOMNode(this.refs.textareaPrenom).value = 'Entrez le prenom';
  },

  onClick1:function(){

    var ancien = this.state.data;
    var ligne = React.findDOMNode(this.refs.textareaMajuscule).value;
    console.log(ligne);
    console.log(  ancien[ligne]);

    ancien[ligne-1]={
      "Nom":ancien[ligne-1].Nom.toUpperCase(),
      "Prenom":ancien[ligne-1].Prenom.toUpperCase(),
    }


    this.setState({data:ancien});
    React.findDOMNode(this.refs.textareaMajuscule).value ='Entrez la ligne';
  },

  onClick2:function(){

    var ancien = this.state.data;
    var ligne = React.findDOMNode(this.refs.textareaSuppression).value;

    if((ligne==1)&&(ancien.length!=1)){
      var nouveau=ancien.slice(ligne,(ancien.length));

    }else if ((ligne< (ancien.length))&&(ligne!=1)){
      var partie1=ancien.slice(0,(ligne-1));
      var partie2=ancien.slice(ligne,(ancien.length));
      var nouveau=partie1.concat(partie2);

    }else{
      var nouveau=ancien.slice(0,(ancien.length-1));
    }

    this.setState({data:nouveau});
    React.findDOMNode(this.refs.textareaSuppression).value = 'Entrez la ligne';
  },

  onClick3:function(){

    var ancien = this.state.data;
    var initial =ancien.slice(1,ancien.length);
    ancien=initial;
    this.setState({data:ancien});
  },


  render: function () {
    return (
      <div>


        <button type="button" onClick={this.onClick3}>Start </button>
        <Griddle results={this.state.data}/>
        <textarea
          ref="textareaNom"
          defaultValue={"Entrez le nom"} />

        <textarea
          ref="textareaPrenom"
          defaultValue={"Entrez le prenom"} />
        <button type="button" onClick={this.onClick} > Ajouter une personne </button>

        <textarea
          ref="textareaMajuscule"
          defaultValue={"Entrez la ligne "} />

      <button type="button-primary" type="submit" onClick={this.onClick1}>Mettre en majuscule </button>

      <textarea
        ref="textareaSuppression"
        defaultValue={"Entrez la ligne "} />

    <button type="button" onClick={this.onClick2}>Supprimer une personne </button>



      </div>
    );
  }
});

React.render(
    <MyGriddle />,

    document.getElementById('example')

);
