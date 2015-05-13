const fs = require('fs');
const chalk = require('chalk');

const getFileName = function(path) {
  return path + '/data-' + Date.now() + '.json';
};

module.exports = function(val, opts) {
  var pathname = opts.pathname || process.cwd();
  fs.writeFile(getFileName(pathname), val, function(err) {
    if (err) {
      console.log(chalk.red('Error writing file:', err));
      process.exit(1);
    }
  });
};
