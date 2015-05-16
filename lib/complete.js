const tableCreate = require('./table-create');
const chalk       = require('chalk');
const countStatusUrls = require('./links').countStatusUrls;

exports.showCompleteMsg = function(obj, jsonFile) {

  // Create table to show onComplete
  const table = tableCreate([
    obj.meta.total,
    countStatusUrls(obj.data[0].status, 404),
    countStatusUrls(obj.data[0].status, 301),
    countStatusUrls(obj.data[0].status, 302),
    obj.data[0].errors.length,
    obj.data[0].messages.length,
    obj.data[0].resources.length
  ]);

  console.log(table);

  // If json file was created, show location
  if (jsonFile) {
    console.log(chalk.green('\n\nStatus Crawler.'),
    '\n\nYour file is saved at:', jsonFile,
    '\n\n');
  }


  return 'complete';
};
