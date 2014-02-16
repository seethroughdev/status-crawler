var config = (function(window,document,undefined){

  'use strict';

    // CONFIG Settings =>
  var config = {};

  // Set starting point for crawl
  config.startUrl = 'https://news.ycombinator.com/';

  // words to require for all urls ** put your top domain here to keep it local **
  config.requiredValues = 'ycombinator';

  // add any words that spider should skip
  config.skippedValues = 'vote, user';

  // set exported file location
  config.fileLocation = './logs/';

  // prepend date to filename
  config.dateFileName = false;

  // toggle verbose in command line
  config.verbose = false;

  // logging level can be set to: 'debug', 'info', 'warning', 'error'
  config.logLevel = 'error';

  // prevent loading images in crawler
  config.loadImages = false;

  // prevent loading Flash, Silverlight from crawler
  config.loadPlugins = false;


  return config;


})(this, this.document);

module.exports = config;