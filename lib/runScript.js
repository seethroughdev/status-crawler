const filterLinks = require('./filterLinks');
const _ = require('lodash');
const runPage = require('./runPage');


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

  const onPageLoad = function(val) {

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
      runPage(url, opts, onPageLoad);
    } else {
      console.log(visitedUrls);
    }

  };

  // Start Crawling
  runPage(url, opts, onPageLoad);
};
