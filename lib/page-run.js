const chalk     = require('chalk');
const Nightmare = require('nightmare');
const check     = require('./page-check');
const setup     = require('./page-setup');

/**
 * Run page script
 * @param  {string}   startUrl URL to start crawling
 * @param  {object}   opts     Options object
 * @param  {Function} cb       Callback for after page is crawled
 * @return {object}            nightmare instance of page
 */
module.exports = function(startUrl, opts, cb) {
  console.log(`${startUrl}`);
  return new Nightmare(opts.nightmare)
    .use(setup(startUrl, opts))
    .use(check(startUrl, cb))
    .run(function(err, nightmare) {
      if (err) {
        console.log(chalk.red(err, nightmare));
        return process.exit(1);
      }
    });
};