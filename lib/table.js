const Table = require('cli-table');

var table = new Table({
  head: ['URLs', '404', '301', '302', 'Errors', 'Messages', 'Resources']
});

// Return table
module.exports = function(arr) {
  arr = arr || [];
  table.push(arr);
  return table.toString();
};
