(function(window,document,undefined){

  'use strict';

    // CONFIG Settings =>
  var config = {};

  // Set starting point for crawl
  config.startUrl = 'http://localhost:3000/';

  // words to require for all urls ** put your top domain here to keep it local **
  config.requiredValues = 'localhost';

  // add any words that spider should skip
  config.skippedValues = 'mailto, #, install, forums, download, comment';

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


  exports.config = config;


})(this, this.document);