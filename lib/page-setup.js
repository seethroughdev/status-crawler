const chalk = require('chalk');
const setData = require('./data-obj').setData;

/**
 * Quick function to set color dependent on status
 * @param {number} status resource status
 */
var getResourceColor = function(status) {
  var color;
  if (status === 200) {
    color = 'green';
  } else if (status === 404) {
    color = 'red';
  } else {
    color = 'yellow';
  }
  return color;
};

/**
 * Add options before page goto()
 * @param  {object} startUrl The url to start crawling
 * @param  {object} opts Config object
 * @return {function}    Nightmare plugin
 */
module.exports = function(startUrl, opts) {

  // Adding flag to prevent double logging of resources.
  var resourceAdded = false;

  return function(nightmare) {
    if (opts.useragent) {
      nightmare.useragent(opts.useragent);
    }

    if (opts.authUser && opts.authPass) {
      nightmare.authentication(opts.authUser, opts.authPass);
    }

    nightmare

      // If anything besides success, lets log it.
      .on('loadFinished', function(status) {
        if (status !== 'success') {
          var obj = {
            url: startUrl,
            status: status
          };
          setData('issues', obj);
        }
      })

      // Filtering resourceReceived by only URLs, not assets.
      .on('resourceReceived', function(resource) {

        if (resource.url === startUrl && !resourceAdded) {

          // add flag/closure to prevent weird double log
          resourceAdded = true;

          // log link to display (show color for status)
          console.log(startUrl,
            chalk[getResourceColor(resource.status)](resource.status)
          );

          // If status is not 200, log it.
          if (resource.status !== 200) {
            var obj = {
              url: startUrl,
              status: resource.status
            };
            setData('status', obj);
          }
        }
      })

      // Doesn't hurt to know what's being logged in our console.
      .on('consoleMessage', function(msg, lineNumber, sourceId) {
        var obj = {
          url: startUrl,
          msg: msg,
          lineNumber: lineNumber,
          sourceId: sourceId
        };
        setData('messages', obj);
      })

      // Any resource load errors, log it.
      .on('resourceError', function(data) {
        var obj = {
          url: startUrl,
          msg: data
        };
        setData('resources', obj);
      })

      // If a page load times out, log it.
      .on('timeout', function(msg) {
        var obj = {
          url: startUrl,
          msg: msg
        };
        setData('timeouts', obj);
      })

      // Log any page errors
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
