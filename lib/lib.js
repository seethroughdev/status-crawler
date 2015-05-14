const parseDomain    = require('parse-domain');

exports.getDomain = function(url) {
  return parseDomain(url).domain + '.' + parseDomain(url).tld;
};
