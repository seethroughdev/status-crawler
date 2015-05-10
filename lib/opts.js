const objectAssign = require('object-assign');
const defaultOpts = require('./defaultOpts');

/**
 * If values are comma separated string, convert to array
 * @param {string|regex|function} val option value
 * @return {array|value}
 */
const prepareValues = function(val) {
  if (typeof val === 'string') {
    val = val
      .replace(' ', '')
      .split(',');
  }

  return val;
};

module.exports = function(config, args) {

  var argObj = {};

  // if value is passed in through argv, override the object
  for (var key in defaultOpts) {
    if (args[key]) {
      argObj[key] = args[key];
    }
  }

  // return merge of default values, config values, and argv values
  var obj = objectAssign(defaultOpts, config, argObj);
  obj.requiredValues = prepareValues(obj.requiredValues);
  obj.skippedValues = prepareValues(obj.skippedValues);
  return obj;
};
