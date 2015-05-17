module.exports = {
  startUrl: 'http://www.example.com',
  requiredValues: '',
  skippedValues: '',
  limit: 10000,
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
  nightmarejs: {
    timeout: 5000,
    loadImages: false,
    ignoreSslErrors: true,
    sslProtocol: 'any'
  }
};
