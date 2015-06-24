var React = require('react');
var esprima = require('esprima');
var Griddle = require('griddle-react');

var estraverse = require('estraverse');

var App = React.createClass({

  getInitialState:function(){
    return {data:[{"Variable":"","Valeur":""}]};
  },



  onClick:function(){

    var code=React.findDOMNode(this.refs.textareaPas).value;
    var syntaxe =esprima.parse(code);
    //var syntaxe =esprima.parse('var answer = 42; x = 5; y = 1 + 3; z = 7 - 1; var nom = "dorra"; y = x; t=x+y;x=10*3;x=x+1;x=1+x;personne=nom+"gastli";');
    console.log(JSON.stringify(esprima.parse('var answer = 42; x = 5; y = 1 + 3;z=7-1;var nom = "dorra"; y = x;x=10*3;x=x+1;x=1+x;'), null, 4));
    var ancien =this.state.data;
    estraverse.traverse(syntaxe, {

      enter: function(node){

        switch(node.type){



          case 'VariableDeclarator':
            ancien.push({
              "Variable":node.id.name,
              "Valeur":node.init.value,
            });
            break;




         case 'ExpressionStatement' :


         if(node.expression.right.type=='Literal'){
          var operator=node.expression.operator;
          ancien.push({

            "Variable":node.expression.left.name,
            "Valeur":node.expression.right.value,
          });



       }else if(node.expression.right.type=='BinaryExpression'){


          if(node.expression.right.left.type=='Literal'){
            var operand1=node.expression.right.left.value;
          }else if (node.expression.right.left.type=='Identifier'){
            var compteur =ancien.length-1;
            while(ancien[compteur].Variable!=node.expression.right.left.name){
              compteur--;
            }
            if(isNaN(parseInt(ancien[compteur].Valeur))){
              var operand1=ancien[compteur].Valeur;
            }else{
              var operand1=parseInt(ancien[compteur].Valeur);
            }
          }




          if(node.expression.right.right.type=='Literal'){
            var operand2=node.expression.right.right.value;
          }else if (node.expression.right.right.type=='Identifier'){
            var compteur =ancien.length-1;;
            while(ancien[compteur].Variable!=node.expression.right.right.name){
              compteur--;
            }
            if(isNaN(parseInt(ancien[compteur].Valeur))){
              var operand2=ancien[compteur].Valeur;
            }else{
              var operand2=parseInt(ancien[compteur].Valeur);
            }
          }


         var operatorBinary=node.expression.right.operator;
         var valeur=0;
         switch(operatorBinary){
           case '+':
             valeur=operand1+operand2;
             console.log(valeur);
             break;
           case '-':
             valeur=operand1-operand2;
             break;
           case '/':
             valeur=operand1/operand2;
             break;
           case '*':
             valeur=operand1*operand2;
             break;
           case '%':
             valeur=operand1 % operand2;
             break;
          }
          ancien.push({

            "Variable":node.expression.left.name,
            "Valeur":valeur,
          });




         }else if(node.expression.right.type=='Identifier'){
           var compteur =ancien.length-1;;
           while(ancien[compteur].Variable!=node.expression.right.name){
             compteur--;
           }
           ancien.push({

             "Variable":node.expression.left.name,
             "Valeur":ancien[compteur].Valeur,
           });


       }
         break;

    }
    }
    });
    this.setState({data:ancien});
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
