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

const prepareValues = function(val) {
  if (typeof val === 'string') {
    return val
      .replace(' ', '')
      .split(',');
  }
};

var argObj = {};

module.exports = function(config, args) {

  for (var key in defaultOpts) {
    if (args[key]) {
      argObj[key] = args[key];
    }
  }

  var obj = objectAssign(defaultOpts, config, argObj);
  obj.requiredValues = prepareValues(obj.requiredValues);
  obj.skippedValues = prepareValues(obj.skippedValues);
  return obj;
};
