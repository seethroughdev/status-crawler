module.exports = {
  startUrl: 'http://www.example.com',
  requiredValues: 'www.example.com',
  skippedValues: '',
  limit: 10000,
  jsonPath: '.crawler/',
  hashMode: false,
  userAgent: null,
  onComplete: null,
  authUser: null,
  authPass: null,
  nightmare: {
    loadImages: false
  }
};
