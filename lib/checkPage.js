/**
 * Check the actual page
 * @param  {object}   page The page object from nightmare
 * @param  {string}   url  The current URL to crawl
 * @param  {function} cb   Callback to wrap around retrieved object
 * @return {object}        return page object
 */
module.exports = function(url, cb) {
  return function(nightmare) {
    nightmare
      .goto(url)
      .evaluate(function() {
        // run in browser
        return {
          url: window.location.href,
          title: document.title,
          links: [].map.call(document.querySelectorAll('a'), function(a) {
            return a.href;
          })
        };
      },
      // run callback out of browser
      function(val) {
        return cb(val);
      });
  };
};
