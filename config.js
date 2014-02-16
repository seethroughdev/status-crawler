var config = (function(window,document,undefined){

  'use strict';

    // CONFIG Settings =>
  var config = {};

  // Set starting point for crawl
  config.startUrl = 'http://example.com';

  // words to require for all urls ** put your top domain here to keep it local **
  config.requiredValues = 'example.com';

  // add any words that spider should skip (comma or space separated)
  config.skippedValues = 'default';

  // set exported file location
  config.fileLocation = './logs/';

  // prepend date to filename
  config.dateFileName = true;

  // toggle verbose in command line
  config.verbose = false;

  // logging level can be set to: 'debug', 'info', 'warning', 'error'
  config.logLevel = 'error';

  // prevent loading of images for speed
  config.loadImages = false;

  // prevent loading Flash, Silverlight from crawler
  config.loadPlugins = false;

  // set limit for links logged (Enter 0 for unlimited.)
  config.limit = 0;


  return config;


})(this, this.document);

module.exports = config;