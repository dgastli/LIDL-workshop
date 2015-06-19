var Calendar = require('rc-calendar');
var React = require('react');
var MyCalendar = React.createClass({
  render: function () {
    return (
      <div>
      <Calendar/>
      </div>
    );
  }
});

React.render(
    <MyCalendar />,
    document.getElementById('example')
);
