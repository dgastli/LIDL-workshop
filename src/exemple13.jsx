var React = require('react');
var FixedDataTable = require('fixed-data-table');

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

// Table data as a list of array.
var rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b3', 'c2'],
  ['a3', 'b3', 'c3']
];

function rowGetter(rowIndex) {
  return rows[rowIndex];
}

React.render(
  <Table
    rowHeight={50}
    rowGetter={rowGetter}
    rowsCount={rows.length}
    width={500}
    height={500}
    headerHeight={50}>
    <Column
      label="Col 1"
      width={300}
      dataKey={0}
    />
    <Column
      label="Col 2"
      width={200}
      dataKey={1}
    />
  </Table>,
  document.getElementById('example')
);
