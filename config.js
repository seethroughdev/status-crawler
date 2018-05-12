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

  // override userAgent if necessary
  config.userAgent = null;

  // override request headers for HTTP Auth by setting the base64 encoded username:credentials here.
  config.httpAuth = null;

  // uncomment this function to provide a callback for the data
  // config.cb = function(data) {
  // }

  // ability to add a cookie
  config.cookie_data = {
    name     : 'example',         /* required property */
    value    : 'example_text',    /* required property */
    domain   : '.example.com',    /* required property */
    path     : '/',
    httponly : true,
    secure   : true,
    expires  : (new Date()).getTime()
  };

  return config;


})(this, this.document);

module.exports = config;
