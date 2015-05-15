const _ = require('lodash');

/**
 * Get usable links from page
 * @param  {array} links list of links on the page
 * @param  {object} opts  config options for crawl
 * @return {array}       array of values that are in required and not in skipped
 */
const filterUrls = exports.filterUrls = function(links, opts) {
  return _.chain(links)
          .uniq()
          .filter(function(link) {
            // if the url contains all the required values
            return _.every(opts.requiredValues, function(val) {
              return link.indexOf(val) !== -1;
            });
          })
          .filter(function(link) {
            // if the url doesn't contain any skipped values
            return _.every(opts.skippedValues, function(val) {
              return link.indexOf(val) === -1;
            });
          })
          .value();
};


/**
 *
 * Update pending Urls based on your config and visited URLs.
 * @param {array} pendingUrls  List of URLs we haven't crawled yet
 * @param {array} visitedUrls  List of URLs we've already crawled
 * @param {array} links        List of URLs pulled from the current page.
 * @param {object} opts        Current config
 * @param {String} originalHost compare URLs to make sure we haven't left site.
 * @return {Array} Updated list of pending URLs
 *
 */
exports.getPendingUrls = function(pendingUrls, visitedUrls, links, opts, originalHost) {

  // If hashmode is not on, remove hash since its pointless to crawl
  if (!opts.hashMode) {
    links = links.map(function(link) {
      return link.split('#')[0];
    });
  }

  // Unless specified, only add URLs on the same host to be crawled.
  if (opts.sameHost) {
    links = links.filter(function(link) {
      return link.indexOf(originalHost) !== -1;
    });
  }

  // Combine existing pending with new URLs and make sure they're not already visited.
  return _.union(
    pendingUrls, _.difference(filterUrls(links, opts), visitedUrls)
  );
};


/**
 *
 * Get Total URLs by response.status
 * @param {array} collection List of status url objects
 * @param {number} status    Response status to check for
 *
 * @return {number} Total amoutn of URLs with that status
 */
exports.countStatusUrls = function(collection, status) {
  return _.filter(collection, function(link) {
    return link.status === status;
  }).length;
};


/**
 *
 * Get totals of each resonse.status
 * @param {number} status Specific response.status to look at
 */
exports.getStatusTotals = function(status) {
  return _.chain(status)
          .map(function(link) {
            return link.status;
          })
          .countBy()
          .value();
};
