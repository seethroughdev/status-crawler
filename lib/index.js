const chalk          = require('chalk');
const lib            = require('./lib');
const getPendingUrls = require('./links').getPendingUrls;
const pageRun        = require('./page-run');
const complete       = require('./complete');
const dataClean      = require('./data').dataClean;
const getObj         = require('./data').getObj;

// Set initial values
var visitedUrls = [],
    pendingUrls = [],
    custom = [],
    linkCount = 0;

/**
 * Run the script
 * @param  {object} config Pulled from local config file
 * @param  {object} args   Pulled from commander argv
 * @return {object}        Page run
 */
module.exports = function(config, args) {
  const opts         = require('./opts-prepare')(config, args);

  // Set URL info to parse
  var pageUrl        = opts.startUrl;
  const originalHost = lib.getDomain(opts.startUrl);

  // Recursive callback after every link is scanned
  const onPageLoad   = function(val) {

    // add to linkCount
    linkCount++;

    // add to visited urls
    visitedUrls.push(pageUrl);

    // if using onPageLoad callback to add custom datapoints
    if (val && typeof val.custom !== 'undefined') {
      custom.push(val.custom);
    }

    // if there are more valid links on the page, add them to pending urls.
    if (val && val.links.length > 0) {
      pendingUrls = getPendingUrls(pendingUrls, visitedUrls, val.links, opts, originalHost);
    }

    // if there are more urls in pending, lets do it all again.
    if (pendingUrls.length > 0 && linkCount < opts.limit) {

      pageUrl = pendingUrls.shift();

      pageRun(pageUrl, opts, onPageLoad);

    // otherwise, finish all the tasks
    } else {

      // Cleanup object data
      var obj = dataClean(getObj(), visitedUrls, linkCount, opts, custom);

      complete.onComplete(obj, opts);
    }

  };

  console.log(chalk.green('Status Crawler Begin!'));

  // Start Crawling
  pageRun(pageUrl, opts, onPageLoad);
};
