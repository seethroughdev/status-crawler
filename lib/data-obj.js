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

exports.getObj = function() {
  return obj;
};

/**
 * Set data object data
 * @param {string} type    the key in data to modify
 * @param {object} data    the data object to add
 * @param {boolean} replace push the data, or replace it
 */
exports.setData = function(type, data, replace) {
  if (typeof obj.data[0][type] !== 'undefined') {
    if (replace) {
      obj.data[0][type] = data;
    } else {
      obj.data[0][type].push(data);
    }
  }
};

exports.setMeta = function(type, data) {
  obj.meta[type] = data;
};
