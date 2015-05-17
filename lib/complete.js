const tableCreate = require('./table');
const countStatusUrls = require('./links').countStatusUrls;
const _ = require('lodash');

exports.onComplete = function(obj, jsonLocation, cb) {

  // if there is no json file, assume cb
  if (_.isFunction(jsonLocation)) {
    cb = jsonLocation;
    jsonLocation = null;
  }

  // Run callback if exists
  if (_.isFunction(cb)) {
    cb(obj);
  }

  // Show complete message
  showCompleteMsg(obj, jsonLocation);

  return obj;

};

const showCompleteMsg = exports.showCompleteMsg = function(obj, jsonLocation) {

  // Create table to show onComplete
  const table = tableCreate([
    obj.meta.total,
    countStatusUrls(obj.data[0].status, 404),
    countStatusUrls(obj.data[0].status, 301),
    countStatusUrls(obj.data[0].status, 302),
    obj.data[0].errors.length,
    obj.data[0].messages.length,
    obj.data[0].resources.length
  ]);

  console.log('\nStatus Crawler Complete.\n')
  console.log(table);

  // If json file was created, show location
  if (jsonLocation) {
    console.log(
    '\n\nYour file is saved at:', jsonLocation,
    '\n\n');
  }


  return 'complete';
};
