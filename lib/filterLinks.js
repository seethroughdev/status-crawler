const _ = require('lodash');

/**
 * Get usable links from page
 * @param  {array} links list of links on the page
 * @param  {object} opts  config options for crawl
 * @return {array}       array of values that are in required and not in skipped
 */
module.exports = function(links, opts) {
  return _.chain(links)
          .uniq()
          .filter(function(link) {
            return _.every(opts.requiredValues, function(val) {
              return link.indexOf(val) !== -1 ? true : false;
            });
          })
          .filter(function(link) {
            return _.any(opts.skippedValues, function(val) {
              return link.indexOf(val) !== -1 ? false : true;
            });
          })
          .value();
};
