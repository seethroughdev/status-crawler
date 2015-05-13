const chalk = require('chalk');
const setData = require('./data-obj').setData;

/**
 * Add options before page goto()
 * @param  {object} page The nightmare element of the page
 * @param  {object} opts Config object
 * @return {object}      Nightmare object
 */
module.exports = function(startUrl, opts) {

  return function(nightmare) {
    if (opts.useragent) {
      nightmare.useragent(opts.useragent);
    }

    if (opts.authUser && opts.authPass) {
      nightmare.authentication(opts.authUser, opts.authPass);
    }

    nightmare
      .on('loadFinished', function(status) {
        if (status !== 'success') {
          var obj = {
            url: startUrl,
            status: status
          };
          setData('issues', obj);
        }
      })
      .on('consoleMessage', function(msg, lineNumber, sourceId) {
        var obj = {
          url: startUrl,
          msg: msg,
          lineNumber: lineNumber,
          sourceId: sourceId
        };
        setData('messages', obj);
      })
      .on('resourceError', function(data) {
        var obj = {
          url: startUrl,
          msg: data
        };
        setData('resources', obj);
      })
      .on('timeout', function(msg) {
        var obj = {
          url: startUrl,
          msg: msg
        };
        setData('timeouts', obj);
      })
      .on('error', function(msg, trace) {
        var obj = {
          url: startUrl,
          msg: msg,
          trace: trace
        };
        setData('errors', obj);
      });
  };
};
