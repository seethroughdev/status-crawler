// Do the actual work on the page

/**
 * Check the actual page
 * @param  {object}   page The page object from nightmare
 * @param  {string}   url  The current URL to crawl
 * @param  {function} cb   Callback to wrap around retrieved object
 * @return {object}        return page object
 */
module.exports = function(page, url, cb) {
  page
    .goto(url)
    .wait()
    .evaluate(function() {
      // run in browser
      return {
        url: window.location.href,
        title: document.title,
        links: Array.prototype.map.call(document.querySelectorAll('a'), function(a) {
          return a.href;
        })
      };
    },
    // run callback out of browser
    function(val) {
      return cb(val);
    });
};
