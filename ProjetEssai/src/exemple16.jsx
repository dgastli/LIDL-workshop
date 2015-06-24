
var esprima = require('esprima');
console.log(JSON.stringify(esprima.parse('var answer = 42; var dorra = 51; dorra= 5+4 ;'), null, 4));

var App = React.createClass({

  render: function() {
    return (

      <div>

        <textarea
          ref="textarea"
          defaultValue={"esprima.parse('var answer = 42;')"} />

      </div>
    );
  }
});
React.render(
    <App />,

    document.getElementById('example')

);
