var GhostButton = require('react-ghost-button');

var MyComponent = React.createClass({
  render: function () {
    return (
      <div>
      <GhostButton
color="blue"
hoverTextColor="white"
/>
      </div>
    );
  }
});

React.render(
    <MyComponent />,
    document.getElementById('example')
);
