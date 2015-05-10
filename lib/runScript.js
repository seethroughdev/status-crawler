const getOpts = require('./opts');
const Nightmare = require('nightmare');
const chalk = require('chalk');

module.exports = function(config, args) {
  const opts = getOpts(config, args);

  const page = new Nightmare(opts);

  if (opts.useragent) {
    page.useragent(opts.useragent);
  }

  page
    .goto(opts.startUrl)
    .wait()
    .title(console.log)
    .run(function(err, nightmare) {
      if (err) {
        return console.log(chalk.red(err));
      }
      console.log('Done!');
    });
};
