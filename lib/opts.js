const objectAssign = require('object-assign');

const defaultOpts = {
  startUrl: 'http://www.example.com',
  requiredValues: '',
  skippedValues: '',
  logLevel: 'error',
  loadImages: false,
  loadPlugins: false,
  ignoreSslErrors: true,
  timeout: 500,
  limit: 10000,
  userAgent: null,
  onComplete: null
};

var argObj = {};

module.exports = function(config, args) {

  for (var key in defaultOpts) {
    if (args[key]) {
      argObj[key] = args[key];
    }
  }

  return objectAssign(defaultOpts, config, argObj);
};
