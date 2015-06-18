var Calendar = require('rc-calendar');
var React = require('react');
var MyCalendar = React.createClass({displayName: "MyCalendar",
  render: function () {
    return (
      React.createElement("div", null, 
      React.createElement(Calendar, null)
      )
    );
  }
});

React.render(
    React.createElement(MyCalendar, null),
    document.getElementById('example')
);
