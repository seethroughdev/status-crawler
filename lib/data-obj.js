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
      timeouts: [],
      resources: []
    }
  ]
};

exports.getObj = function() {
  return obj;
};

exports.setData = function(type, data) {
  if (typeof obj.data[0][type] !== 'undefined') {
    obj.data[0][type].push(data);
  }
};

exports.setMeta = function(type, data) {
  if (typeof obj.meta[type] !== 'undefined') {
    obj.meta[type] = data;
  }
};
