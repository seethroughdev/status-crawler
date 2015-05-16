exports.config = {
  startUrl: 'http://grantland.com/',
  requiredValues: '',
  skippedValues: 'smart-captcha/, blog/, paymentstatus.png',
  jsonPath: '.crawler/',
  sameHost: true,
  limit: 20,
  hashMode: false,
  userAgent: null,
  onComplete: null,
  authUser: null,
  authPass: null,
  nightmare: {
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
  'jsonPath': '.crawler/',
  'hashMode': false,
  'sameHost': true,
  'userAgent': null,
  'authUser': null,
  'authPass': null,
  'onStart': null,
  'onPageLoad': null,
  'onComplete': null,
  'nightmare': {
    'timeout': 1000,
    'loadImages': false,
    'ignoreSslErrors': true,
    'sslProtocol': 'any'
  }
};
