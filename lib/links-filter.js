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

const getPendingUrls = exports.getPendingUrls = function(pendingUrls, visitedUrls, links, opts) {
  return _.union(
    pendingUrls, _.difference(filterUrls(links, opts), visitedUrls)
  );
};

const countStatusUrls = exports.countStatusUrls = function(collection, status) {
  return _.filter(collection, function(link) {
    return link.status === status;
  }).length;
};

const getStatusTotals = exports.getStatusTotals = function(status) {
  return _.chain(status)
          .map(function(link) {
            return link.status;
          })
          .countBy()
          .value();
};
