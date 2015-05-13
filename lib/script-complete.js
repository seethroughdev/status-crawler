const tableCreate = require('./table-create');
const chalk       = require('chalk');
const countStatusUrls = require('./links-filter').countStatusUrls;

module.exports = function(obj, jsonFile) {
  return console.log(
    tableCreate([
      obj.meta.total,
      countStatusUrls(obj.data[0].status, 404),
      countStatusUrls(obj.data[0].status, 301),
      countStatusUrls(obj.data[0].status, 302),
      obj.data[0].errors.length,
      obj.data[0].messages.length,
      obj.data[0].resources.length
    ]),
    chalk.green('\n\nStatus Crawler.'),
    '\n\nYour file is saved at:', jsonFile,
    '\n\n'
  );
};
