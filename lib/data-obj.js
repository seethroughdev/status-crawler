const _               = require('lodash');
const getStatusTotals = require('./links-filter').getStatusTotals;

var obj = {
  meta: {
    type: 'pages',
    total: 0,
    date: null
  },
  data: [
    {
      links: [],
      errors: [],
      messages: [],
      issues: [],
      status: [],
      timeouts: [],
      resources: []
    }
  ]
};

/**
 *
 * Getter for data Object
 *
 * @return {object}   Main data object
 */
exports.getObj = function() {
  return obj;
};


/**
 * Set data object data
 * @param {object} dataObj the current main data object
 * @param {string} type    the key in data to modify
 * @param {object} data    the data object to add
 * @param {boolean} replace push the data, or replace it
 * @return {Object}     Updated object
 *
 */
const setData = exports.setData = function(dataObj, type, data, replace) {
  dataObj = dataObj.data[0];

  if (typeof dataObj[type] !== 'undefined') {
    if (replace) {
      dataObj[type] = data;
    } else {
      dataObj[type].push(data);
    }
  }
  return dataObj;
};


/**
 *
 * Set meta of Object
 * @param {object} dataObj Current state of dataObj
 * @param {string} type    key of Object
 * @param {Any} data    Data to attach to key
 * @return {Object}     Updated object
 *
 */
const setMeta = exports.setMeta = function(dataObj, type, data) {
  dataObj.meta[type] = data;
  return dataObj;
};

/**
 *
 * Create and cleanup final data object to be written to file and passed to cb
 * @param  {Object} obj         Starting version of object
 * @param  {Array}  visitedUrls List of all visited URLs
 * @param  {Number} linkCount   Total number of links crawled
 * @param  {Object} opts        Current options object
 * @return {Object}             Final object for print.
 */
exports.dataClean = function(dataObj, visitedUrls, linkCount, opts) {
  var statusObj = _.uniq(dataObj.data[0].status, 'url');
  var statusTotals = getStatusTotals(statusObj);

  setData(dataObj, 'links', visitedUrls, true);
  setMeta(dataObj, 'total', linkCount);
  setData(dataObj, 'status', statusObj, true);
  setMeta(dataObj, 'date', new Date());
  setMeta(dataObj, 'config', opts);

  // Set status totals in meta object
  for (var prop in statusTotals) {
    setMeta(dataObj, prop, statusTotals[prop]);
  }

  return dataObj;
};
