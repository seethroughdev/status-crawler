const serialize = require('serialize-javascript');
const parseDomain    = require('parse-domain');

exports.getDomain = function(url) {
  return parseDomain(url).domain + '.' + parseDomain(url).tld;
};

exports.prepareCbFn = function(fn) {
  fn = serialize(fn);
  fn = fn.substring(fn.indexOf('{') + 1, fn.lastIndexOf('}'));
  fn = fn.trim();
  return fn;
};
