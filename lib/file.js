const fs = require('fs-extra');
const chalk = require('chalk');
const path = require('path');

const getFileName = function(pathname) {
  return pathname + 'data-' + Date.now() + '.json';
};

const configCopy = {
  exists: chalk.red('Looks like the config already exists!  Delete ' + chalk.white('.crawlerrc') + ' if you want to regenerate the example config.'),
  success: chalk.green('.crawlerrc was created at: '),
  error: chalk.red('.crawlerrc could not be created')
};


exports.create = function(val, opts) {
  var pathname = path.join(process.cwd(), opts.saveJson || '');
  var filename = getFileName(pathname);
  fs.ensureDir(pathname, function(err) {
    if (err) {
      console.log(chalk.red('Error creating folder:', err));
    }
    // dir has now been created, including the directory it is to be placed in
    fs.writeFile(filename, val, function(err2) {
      if (err2) {
        console.log(chalk.red('Error writing file:', err2));
        process.exit(1);
      }
    });
  });
  return filename;
};

// Copy config file from lib if one doesn't exist
exports.createConfig = function(force) {
  fs.open(path.resolve(process.cwd(), '.crawlerrc'), 'r', function(err) {
    if (err && err.code === 'ENOENT' || force) {
      fs.copy('./lib/.crawlerrc', path.resolve(process.cwd(), '.crawlerrc'), function(e) {
        if (e) {
          return console.error(configCopy.error, e);
        }
        return console.log(configCopy.success, process.cwd());
      });
    } else {
      console.log(configCopy.exists);
    }
  });
};
