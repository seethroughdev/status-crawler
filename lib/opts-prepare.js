const objectAssign = require('object-assign');
const defaultOpts = require('./opts-default');

/**
 * If values are comma separated string, convert to array
 * @param {string|regex|function} val option value
 * @return {array|value}
 */
const prepareValues = function(val) {
  if (typeof val === 'string' && val !== '') {
    val = val
      .replace(/\s/g, '')
      .split(',');
  }

  return val;
};

/**
 * Get final config options
 * @param  {object} config Taken from config file
 * @param  {object} args   Taken from commanderjs
 * @return {object}        Merged object from values, config and argv
 */
module.exports = function(config, args) {
  config = config || defaultOpts;
  var argObj = {};

  // if value is passed in through argv, override the object
  for (var key in defaultOpts) {
    if (typeof args[key] !== 'undefined') {
      argObj[key] = args[key];
    }
  }

  // return merge of default values, config values, and argv values
  var obj = objectAssign({}, defaultOpts, config, argObj);
  obj.nightmarejs = objectAssign({}, defaultOpts.nightmarejs, config.nightmarejs);
  obj.requiredValues = prepareValues(obj.requiredValues);
  obj.skippedValues = prepareValues(obj.skippedValues);
  return obj;
};
