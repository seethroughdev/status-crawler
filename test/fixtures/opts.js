exports.config = {
  startUrl: 'http://grantland.com/',
  requiredValues: '',
  skippedValues: 'smart-captcha/, blog/, paymentstatus.png',
  sameHost: true,
  saveJson: '.crawler/',
  limit: 20,
  hashMode: false,
  userAgent: null,
  onComplete: null,
  authUser: null,
  authPass: null,
  nightmarejs: {
    timeout: 1000
  }
};

exports.obj = {
  'startUrl': 'http://grantland.com/',
  'requiredValues': '',
  'skippedValues': [
    'smart-captcha/',
    'blog/',
    'paymentstatus.png'
  ],
  'limit': 20,
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
    'timeout': 1000,
    'loadImages': false,
    'ignoreSslErrors': true,
    'sslProtocol': 'any'
  }
};
