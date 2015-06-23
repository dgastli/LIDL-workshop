var React = require('react');
var Griddle = require('griddle-react');


var App = React.createClass({

  getInitialState:function(){
    return {data:[{"Variable":"","Valeur":""}]};
  },

  onClick:function(){

    var text=React.findDOMNode(this.refs.textareaPas).value;
    var indiceDebutVariable=-1;
    var indiceFinVariable=-1;
    var indiceVar = 0 ;
    var ancien = this.state.data;
    compteur=0;
    
    while((indiceDebutVariable=text.indexOf(" ",(indiceDebutVariable)))!=-1){
      var chaine =text.substring(indiceVar,indiceVar+4);
      console.log("chaine =", chaine);
      if(chaine!="var "){
        console.log("indiceVar+4 = "+indiceVar+4);
        IndiceDebutVariable=text.indexOf(" ",(indiceFinValeur+1));

      }


      console.log("IndiceDebutVariable coucou = ",indiceDebutVariable);
      indiceFinVariable=text.indexOf(" ",(indiceDebutVariable+1));
      if(text.charAt(indiceFinVariable+1)=="="){
        var variable=text.substring(indiceDebutVariable,(indiceFinVariable));

        indiceDebutValeur=text.indexOf(" ",(indiceFinVariable+1));
        indiceFinValeur=text.indexOf(" ",(indiceDebutValeur+1));
        console.log("indiceDebutValeur =",indiceDebutValeur);
        console.log("indiceFinValeur =",indiceFinValeur);
        var valeur=text.substring((indiceDebutValeur+1),indiceFinValeur);
        indiceDebutVariable=indiceFinValeur+1;
      }else{
        indiceDebutVariable=indiceFinVariable+1;
      }

      console.log("indiceDebutVariable nouvel = ",indiceDebutVariable);
      compteur=compteur+1;
      console.log(" compteur =",compteur);
      console.log("variable = ",variable);
      console.log("valeur = ",valeur);
      ancien.push({
        "Variable":variable,
        "Valeur":valeur,
      });
      indiceVar=text.indexOf("var ",(indiceFinVariable+1));
    }
    this.setState({data:ancien});
    console.log(text);

  },


  render: function() {
    return (

      <div>
        <textarea
          ref="textareaPas"
          defaultValue={"Entrez votre texte "} />
        <button type="button" onClick={this.onClick} > OK </button>
        <Griddle results={this.state.data}/>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('example'));
