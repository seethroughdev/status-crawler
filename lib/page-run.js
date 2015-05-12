const chalk     = require('chalk');
const Nightmare = require('nightmare');
const check     = require('./page-check');
const setup     = require('./page-setup');

module.exports = function(startUrl, opts, cb) {
  console.log(`Crawling ${startUrl}`);
  return new Nightmare(opts.nightmare)
    .use(setup(opts))
    .use(check(startUrl, cb))
    .run(function(err, nightmare) {
      if (err) {
        return console.log(chalk.red(err, nightmare));
      }
    });
};
