var React = require('react');
var esprima = require('esprima');

var estraverse = require('estraverse');

var App = React.createClass({

  getInitialState:function(){
    return {data:[{"Variable":"","Valeur":""}]};
  },



  onClick:function(){

    var code=React.findDOMNode(this.refs.textareaPas).value;
  //  var syntaxe =JSON.stringify(esprima.parse(code), null, 4);
    var syntaxe =JSON.stringify(esprima.parse('var answer = 42'), null, 4);

    var ancien =this.state.data;
    estraverse.traverse(syntaxe, {
      enter: function(node){
        switch(node.type){

          case 'VariableDeclarator':
            ancien.push({
              "Variable":node.declarations.id.name,
              "Valeur":node.declarations.init.value,
            });
            break;

         case 'ExpressionStatement' :
          var operator1=node.expression.operator;
          var operator2=node.expression.right.operator;
          var operand1=node.expression.right.left.value;
          var operand2=node.expression.right.right.value;
          var valeur=0;
          switch(operator2){
            case '+':
              valeur=parseInt(operand1)+parseInt(operand2);
              break;
            case '-':
              valeur=parseInt(operand1)-parseInt(operand2);
              break;
            case '/':
              valeur=parseInt(operand1)/parseInt(operand2);
              break;
            case '*':
              valeur=parseInt(operand1)*parseInt(operand2);
              break;
            case '%':
              valeur=parseInt(operand1) % parseInt(operand2);
              break;

          }
         ancien.push({

           "Variable":node.expression.left.name,
           "Valeur":valeur,
         });
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
        <App results={this.state.data}/>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('example'));
