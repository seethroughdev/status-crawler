var config = (function(window,document,undefined){

  'use strict';

    // CONFIG Settings =>
  var config = {};

  // Set starting point for crawl
  config.startUrl = 'http://www.monkeytest1.com/home/';

  // words to require for all urls ** put your top domain here to keep it local **
  config.requiredValues = 'monkeytest1.com';

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

  // ability to add a cookie
  config.cookie = {
    'name'     : 'auth',    /* required property */
    'value'    : 't_2FoKYwWvAmWFW0OFs_2FXQaZkDHQGyTF88IVkwV9fuLNq455KUjXjVHSU7xsVjmKA4N_2FviL_2FwgACuXE3sMDpYwvkQS9BgfeZbMbPeHdhz5K4jYrCMmSpORohcjNS3VWZ2RWWLchQmRt2v_2FpwnQyV_2F_2F0CxOTyCLq7_2FZzMCDwwigkG_2FbvO874bMe_2FF6ncnuzV3Ka',    /* required property */
    'domain'   : '.monkeytest1.com',    /* required property */
    'path'     : '/',
    'httponly' : true,
    'secure'   : true,
  };

  return config;


})(this, this.document);

module.exports = config;
