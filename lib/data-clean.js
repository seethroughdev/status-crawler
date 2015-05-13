const _               = require('lodash');
const setData         = require('./data-obj').setData;
const setMeta         = require('./data-obj').setMeta;
const getStatusTotals = require('./links-filter').getStatusTotals;
const getObj          = require('./data-obj').getObj;

module.exports = function(obj, visitedUrls, linkCount) {
  var statusObj = _.uniq(obj.data[0].status, 'url');
  var statusTotals = getStatusTotals(statusObj);

  setData('links', visitedUrls, true);
  setMeta('total', linkCount);
  setData('status', statusObj, true);
  setMeta('date', new Date());

  // Set status totals in meta object
  for (var prop in statusTotals) {
    setMeta(prop, statusTotals[prop]);
  }

  return getObj();
};
