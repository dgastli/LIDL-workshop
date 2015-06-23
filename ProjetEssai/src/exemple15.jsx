var React = require('react');
var Griddle = require('griddle-react');


var App = React.createClass({

  getInitialState:function(){
    return {data:[{"Variable":"","Valeur":""}]};
  },

  onClick:function(){

    var text=React.findDOMNode(this.refs.textareaPas).value;
    var IndiceVar1=-1;
    var IndiceVar2=-1;

    var ancien = this.state.data;


    while((IndiceVar1=text.indexOf("var",(IndiceVar1+1)))!=-1){
      console.log("IndiceVar1 = ",IndiceVar1);
      var indiceVariable =text.indexOf("=", (IndiceVar1+1));
      console.log("IndiceVariable = ",indiceVariable);
      var variable=text.substring((IndiceVar1+4),(indiceVariable-1));
      console.log("variable = ",variable);
      IndiceVar2=text.indexOf("var",(IndiceVar1+1));
      console.log("IndiceVar2 = ",IndiceVar2);
      console.log("IndiceVariable = ",indiceVariable);
      var IndiceVirgule=text.indexOf(";",(IndiceVar1+1));
      var valeur=text.substring((indiceVariable+1),(IndiceVirgule));
      console.log("valeur = ",valeur);

      if (valeur.charAt(1)=='"'){
        console.log("hiiiiiiiiiiiiiiiiii =",valeur.charAt(1));
        valeur=valeur.substring(2,(valeur.length-2));
      }
      ancien.push({
        "Variable":variable,
        "Valeur":valeur,
      });

    }
    this.setState({data:ancien});
    text=text.replace("var ","");
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
