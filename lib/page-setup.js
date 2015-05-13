const chalk = require('chalk');
const setData = require('./data-obj').setData;

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
 * @param  {object} page The nightmare element of the page
 * @param  {object} opts Config object
 * @return {object}      Nightmare object
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
      .on('loadFinished', function(status) {
        if (status !== 'success') {
          var obj = {
            url: startUrl,
            status: status
          };
          setData('issues', obj);
        }
      })
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
