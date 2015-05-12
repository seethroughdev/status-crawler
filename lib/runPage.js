const chalk     = require('chalk');
const Nightmare = require('nightmare');
const checkPage = require('./checkPage');
const setup     = require('./setup');

module.exports = function(startUrl, opts, cb) {
  console.log(`Crawling ${startUrl}`);
  return new Nightmare(opts.nightmare)
    .use(setup(opts))
    .use(checkPage(startUrl, cb))
    .run(function(err, nightmare) {
      if (err) {
        return console.log(chalk.red(err, nightmare));
      }
    });
};
