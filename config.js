var config = (function(window,document,undefined){

  'use strict';

    // CONFIG Settings =>
  var config = {};

  // Set starting point for crawl
  config.startUrl = 'http://www.wufoo.com/';

  // words to require for all urls ** put your top domain here to keep it local **
  config.requiredValues = 'http://www.wufoo.com/';

  // add any words that spider should skip
  config.skippedValues = 'vote, user, comment, forum';

  // set exported file location
  config.fileLocation = './logs/';

  // prepend date to filename
  config.dateFileName = false;

  // toggle verbose in command line
  config.verbose = false;

  // logging level can be set to: 'debug', 'info', 'warning', 'error'
  config.logLevel = 'error';

  // prevent loading Flash, Silverlight from crawler
  config.loadPlugins = false;

  // set limit for links logged (Enter 0 for unlimited.)
  config.limit = 25;


  return config;


})(this, this.document);

module.exports = config;