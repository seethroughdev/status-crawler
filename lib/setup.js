const chalk = require('chalk');

/**
 * Add options before page goto()
 * @param  {object} page The nightmare element of the page
 * @param  {object} opts Config object
 * @return {object}      Nightmare object
 */
module.exports = function(opts) {

  return function(nightmare) {
    if (opts.useragent) {
      nightmare.useragent(opts.useragent);
    }

    if (opts.authUser && opts.authPass) {
      nightmare.authentication(opts.authUser, opts.authPass);
    }

    nightmare
      .on('loadFinished', function(status) {
        if (status === 'success') {
          console.log('STATUS: ', chalk.green(status));
        } else {
          console.log('STATUS:', status);
        }
      })
      .on('consoleMessage', function(msg, lineNumber, sourceId) {
        console.log(chalk.red(msg, lineNumber, sourceId));
      })
      .on('error', function(msg, trace) {
        console.log(chalk.red('onError!: ', msg, JSON.stringify(trace, null, 4)));
      });
  };
};
