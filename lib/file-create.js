const fs    = require('fs-extra');
const chalk = require('chalk');
const path  = require('path');

const getFileName = function(pathname) {
  return pathname + 'data-' + Date.now() + '.json';
};

module.exports = function(val, opts) {
  var pathname = path.join(process.cwd(), opts.jsonPath || '');
  fs.ensureDir(pathname, function (err) {
    if (err) {
      console.log(chalk.red('Error creating folder:', err));
    }
    // dir has now been created, including the directory it is to be placed in
    return fs.writeFile(getFileName(pathname), val, function(err2) {
      if (err2) {
        console.log(chalk.red('Error writing file:', err));
        process.exit(1);
      }
    });
  });
};
