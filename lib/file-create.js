const fs = require('fs');
const chalk = require('chalk');

const getFileName = function(path) {
  path = path || '';
  return process.cwd() + path + '/data-' + Date.now() + '.json';
};

module.exports = function(val, opts) {
  fs.writeFile(getFileName(opts.pathname), val, function(err) {
    if (err) {
      console.log(chalk.red('Error writing file:', err));
      process.exit(1);
    }
  });
};
