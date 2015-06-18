var GhostButton = require('react-ghost-button');

var MyComponent = React.createClass({displayName: "MyComponent",
  render: function () {
    return (
      React.createElement("div", null, 
      React.createElement(GhostButton, {
color: "blue", 
hoverTextColor: "white"}
)
      )
    );
  }
});

React.render(
    React.createElement(MyComponent, null),
    document.getElementById('example')
);
