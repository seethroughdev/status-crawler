const tableCreate = require('./table-create');
const chalk       = require('chalk');

module.exports = function(obj, jsonFile) {
  return console.log(
    tableCreate([
      obj.meta.total, 12, 13, 9,
      obj.data[0].errors.length,
      obj.data[0].messages.length,
      obj.data[0].resources.length
    ]),
    chalk.green('\n\nStatus Crawler.'),
    '\n\nYour file is saved at:', jsonFile,
    '\n\n'
  );
};
