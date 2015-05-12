const Nightmare = require('nightmare');
const chalk = require('chalk');
const setup = require('./setup');
const filterLinks = require('./filterLinks');
const checkPage = require('./checkPage');
const _ = require('lodash');

// URL arrays
var visitedUrls = [],
    pendingUrls = [],
    linkCount = 0;

/**
 * Run the actual script
 * @param  {object} config Pulled from local config file
 * @param  {object} args   Pulled from commander argv
 * @return {object}        Page run
 */
module.exports = function(config, args) {
  const opts = require('./opts')(config, args);

  var url = opts.startUrl;

  const pageCb = function(val) {

    // add to linkCount
    linkCount++;

    // add to visited urls
    visitedUrls.push(url);

    // if there are more valid links on the page, add them to pending urls.
    if (val && val.links.length > 0) {
      pendingUrls = _.union(
        pendingUrls, _.difference(filterLinks(val.links, opts), visitedUrls)
      );
    }

    // if there are more urls in pending, lets do it all again.
    if (pendingUrls.length > 0 && linkCount < opts.limit) {
      url = pendingUrls.shift();
      runPage(url, pageCb);
    } else {
      console.log(visitedUrls);
    }

  };

  const runPage = function(startUrl, cb) {
    console.log(`Crawling ${url}`);
    return new Nightmare(opts.nightmare)
      .use(setup(opts))
      .use(checkPage(startUrl, cb))
      .run(function(err, nightmare) {
        if (err) {
          return console.log(chalk.red(err, nightmare));
        }
      });
  };

  runPage(url, pageCb);
};
