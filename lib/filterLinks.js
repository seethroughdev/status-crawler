const _ = require('lodash');

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
