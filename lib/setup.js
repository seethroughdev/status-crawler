const chalk = require('chalk');

module.exports = function(page, opts) {

  if (opts.useragent) {
    page.useragent(opts.useragent);
  }

  // Add error and status logging
  page
    .on('loadFinished', function(status) {
      console.log('STATUS: ', status);
    })
    .on('resourceError', function(val) {
      console.log(chalk.red('resourceError!: ', val));
    })
    .on('error', function(msg, trace) {
      console.log(chalk.red('onError!: ', msg, trace));
    });

  return page;
};
