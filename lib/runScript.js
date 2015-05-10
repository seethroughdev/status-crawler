const getOpts   = require('./opts');
const Nightmare = require('nightmare');
const chalk     = require('chalk');
const setup     = require('./setup');
const filterLinks = require('./filterLinks');

module.exports = function(config, args) {
  const opts = getOpts(config, args);

  const page = new Nightmare(opts);

  setup(page, opts);

  page
    .goto(opts.startUrl)
    .wait()
    .evaluate(function() {
      return {
        url: window.location.href,
        title: document.title,
        links: Array.prototype.map.call(document.querySelectorAll('a'), function(a) {
          return a.href;
        })
      };
    }, function(val) {
      console.log(filterLinks(val.links, opts));
    })
    .run(function(err, nightmare) {
      if (err) {
        return console.log(chalk.red(err));
      }
      return console.log(chalk.green('Crawl completed!'));
    });
};
