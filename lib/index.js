const chalk          = require('chalk');
const getPendingUrls = require('./links-filter').getPendingUrls;
const pageRun        = require('./page-run');
const getObj         = require('./data-obj').getObj;
const setData        = require('./data-obj').setData;
const setMeta        = require('./data-obj').setMeta;
const fileCreate     = require('./file-create');

// Set initial values
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
  const opts = require('./opts-prepare')(config, args);

  var url = opts.startUrl;

  const onPageLoad = function(val) {

    // add to linkCount
    linkCount++;

    // add to visited urls
    visitedUrls.push(url);

    // if there are more valid links on the page, add them to pending urls.
    if (val && val.links.length > 0) {
      pendingUrls = getPendingUrls(pendingUrls, visitedUrls, val.links, opts);
    }

    // if there are more urls in pending, lets do it all again.
    if (pendingUrls.length > 0 && linkCount < opts.limit) {
      url = pendingUrls.shift();
      pageRun(url, opts, onPageLoad);
    } else {
      setData('links', visitedUrls);
      setMeta('total', linkCount);
      setMeta('date', new Date());

      fileCreate(JSON.stringify(getObj(), null, 4), opts);
    }

  };

  console.log(chalk.green('Status Crawler Begin!'));

  // Start Crawling
  pageRun(url, opts, onPageLoad);
};
