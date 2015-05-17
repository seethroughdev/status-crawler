exports.originalHost = 'grantland.com';

exports.defaultOpts = {
  startUrl: 'http://www.example.com',
  requiredValues: 'tag',
  skippedValues: 'features, 2015',
  limit: 50,
  jsonPath: '.crawler/',
  hashMode: false,
  sameHost: true,
  saveJson: true,
  userAgent: null,
  authUser: null,
  authPass: null,
  onStart: null,
  onPageLoad: null,
  onComplete: null,
  nightmare: {
    timeout: 5000,
    loadImages: false,
    ignoreSslErrors: true,
    sslProtocol: 'any'
  }
};

exports.config = {
  startUrl: 'http://grantland.com/',
  requiredValues: 'tag',
  skippedValues: 'features, 2015',
  limit: 50,
  jsonPath: '.crawler/',
  hashMode: false,
  sameHost: true,
  saveJson: true,
  userAgent: null,
  authUser: 'username',
  authPass: '1234',
  onStart: null,
  onPageLoad: null,
  onComplete: null,
  nightmare: {
    timeout: 5000,
    loadImages: true,
    ignoreSslErrors: true,
    sslProtocol: 'any'
  }
};

exports.opts = {
  startUrl: 'http://grantland.com/',
  requiredValues: ['tag'],
  skippedValues: ['features', '2015'],
  limit: 50,
  jsonPath: '.crawler/',
  hashMode: false,
  sameHost: true,
  saveJson: true,
  userAgent: null,
  authUser: 'username',
  authPass: '1234',
  onStart: null,
  onPageLoad: null,
  onComplete: null,
  nightmare: {
    timeout: 5000,
    loadImages: true,
    ignoreSslErrors: true,
    sslProtocol: 'any'
  }
};
