const _ = require('lodash');
const prepareCbFn = require('./lib').prepareCbFn;

var onPageLoadCb;
/**
 * Check the actual page
 * @param  {object}   page The page object from nightmare
 * @param  {string}   url  The current URL to crawl
 * @param  {function} cb   Callback to wrap around retrieved object
 * @return {object}        return page object
 */
module.exports = function(url, opts, cb) {

  // passing inPage callback, must be a serialized string per:
  // https://github.com/ariya/phantomjs/issues/10132
  // so we're serializing the function contents, and creating
  // the function on the inside.
  //
  // of course, if there's no cb passed, we're going to skip out altogether
  if(_.isFunction(opts.onPageLoad)) {
    onPageLoadCb = prepareCbFn(opts.onPageLoad);
  }

  return function(nightmare) {
    nightmare
      .goto(url)
      .evaluate(function(pageCb) {

          var crawlerObj, crawlerCustomResult;

          // run in browser, get page info and relevant links to crawl
          crawlerObj = {
            url: window.location.href,
            title: document.title,
            links: [].map.call(document.querySelectorAll('a'), function(a) {
              return a.href;
            })
          };

          // Only process innerCb if its valid
          if(typeof pageCb === 'string' && pageCb !== '') {
            crawlerCustomResult = new Function('', pageCb)();

            if(typeof crawlerCustomResult !== 'undefined' &&
              crawlerCustomResult !== [] &&
              crawlerCustomResult !== ''
            ) {
              crawlerObj.custom = {
                url: window.location.href,
                data: crawlerCustomResult
              };
            }

          }

          return crawlerObj;
        },
        // run callback out of browser
        function(val) {
          return cb(val);
        }, onPageLoadCb );
  };
};
