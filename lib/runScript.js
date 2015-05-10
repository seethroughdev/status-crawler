const getOpts = require('./opts');
const Nightmare = require('nightmare');
const chalk = require('chalk');
const setup = require('./setup');
const filterLinks = require('./filterLinks');
const checkPage = require('./checkPage');
const _ = require('lodash');

// URL arrays
var visitedUrls = [],
    pendingUrls = [];

/**
 * Run the actual script
 * @param  {object} config Pulled from local config file
 * @param  {object} args   Pulled from commander argv
 * @return {object}        Page run
 */
module.exports = function(config, args) {
  const opts = getOpts(config, args);
  const page = new Nightmare(opts);
  const logLinks = function(val) {
    // combine unique pending URLs
    pendingUrls = _.union(
      pendingUrls, _.difference(filterLinks(val.links, opts), visitedUrls)
    );
  };

  var url = opts.startUrl;
  visitedUrls.push(url);

  // set nightmare options and errors
  setup(page, opts);
  checkPage(page, url, logLinks);
  page.run(function(err, nightmare) {
    if (err) {
      return console.log(chalk.red(err));
    }
    console.log(visitedUrls, pendingUrls);
    return console.log(chalk.green('Crawl completed!'));
  });
};
