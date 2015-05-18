exports.data = {
  'meta': {
    'type': 'pages',
    'total': 5,
    'date': '2015-05-17T06:37:12.756Z',
    'config': {
      'startUrl': 'http://grantland.com/',
      'requiredValues': '',
      'skippedValues': '',
      'limit': 5,
      'hashMode': false,
      'sameHost': true,
      'saveJson': '.crawler/',
      'userAgent': null,
      'authUser': null,
      'authPass': null,
      'onStart': null,
      'onPageLoad': null,
      'onComplete': null,
      'nightmarejs': {
        'timeout': 5000,
        'loadImages': false,
        'ignoreSslErrors': true,
        'sslProtocol': 'any'
      }
    }
  },
  'data': [{
    'links': [
      'http://grantland.com/',
      'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/',
      'http://grantland.com/tags/mlb/',
      'http://grantland.com/features/',
      'http://grantland.com/contributors/ben-lindbergh/'
    ],
    'errors': [],
    'messages': [],
    'issues': [{
      'url': 'http://grantland.com/contributors/ben-lindbergh/',
      'status': 'fail'
    }],
    'status': [],
    'timeouts': [],
    'resources': [{
      'url': 'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/',
      'msg': {
        'errorCode': 203,
        'errorString': 'Error downloading http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/mraid.js - server replied: Not Found',
        'id': 41,
        'status': 404,
        'statusText': 'Not Found',
        'url': 'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/mraid.js'
      }
    }, {
      'url': 'http://grantland.com/tags/mlb/',
      'msg': {
        'errorCode': 5,
        'errorString': 'Operation canceled',
        'id': 45,
        'status': 200,
        'statusText': 'OK',
        'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f29fb2b4b8&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff2e213178c&relation=parent&error=unknown_user'
      }
    }, {
      'url': 'http://grantland.com/features/',
      'msg': {
        'errorCode': 5,
        'errorString': 'Operation canceled',
        'id': 43,
        'status': 200,
        'statusText': 'OK',
        'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f1fd2bd2e&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff33127416&relation=parent&error=unknown_user'
      }
    }, {
      'url': 'http://grantland.com/contributors/ben-lindbergh/',
      'msg': {
        'errorCode': 203,
        'errorString': 'Error downloading http://grantland.com/contributors/ben-lindbergh/mraid.js - server replied: Not Found',
        'id': 34,
        'status': 404,
        'statusText': 'Not Found',
        'url': 'http://grantland.com/contributors/ben-lindbergh/mraid.js'
      }
    }, {
      'url': 'http://grantland.com/contributors/ben-lindbergh/',
      'msg': {
        'errorCode': 5,
        'errorString': 'Operation canceled',
        'id': 49,
        'status': 200,
        'statusText': 'OK',
        'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f12651f894&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff2e464750&relation=parent&error=unknown_user'
      }
    }]
  }]
};

exports.preData = {
  meta: {
    type: 'pages',
    total: 0,
    date: null
  },
  data: [{
    links: [],
    errors: [],
    messages: [],
    issues: [],
    status: [],
    timeouts: [],
    resources: [Object]
  }]
};

exports.preVisitedUrls = ['http://grantland.com/',
  'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/',
  'http://grantland.com/tags/mlb/',
  'http://grantland.com/features/',
  'http://grantland.com/contributors/ben-lindbergh/'
];

exports.preLinkCount = 5;

exports.preOpts = {
  startUrl: 'http://grantland.com/',
  requiredValues: '',
  skippedValues: '',
  limit: 5,
  hashMode: false,
  sameHost: true,
  saveJson: '.crawler/',
  userAgent: null,
  authUser: null,
  authPass: null,
  onStart: null,
  onPageLoad: null,
  onComplete: null,
  nightmarejs: {
    timeout: 5000,
    loadImages: false,
    ignoreSslErrors: true,
    sslProtocol: 'any'
  }
};
