module.exports = {
  startUrl: 'http://www.example.com',
  requiredValues: 'www.example.com',
  skippedValues: '',
  limit: 10000,
  jsonPath: '.crawler/',
  hashMode: false,
  userAgent: null,
  authUser: null,
  authPass: null,
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
