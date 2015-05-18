exports.rawFn = [
  function() {
    console.log('I am a function!');
  },
  function() {
    document.querySelector('meta[name="description"]').getAttribute('content');
  },
  function named() {
    return {
      canonical: document.querySelector('link[rel="canonical"]').getAttribute('href'),
      description: document.querySelector('meta[name="description"]').getAttribute('content')
    };
  }
];

exports.preparedFn = [
  'console.log(\'I am a function!\');',
  'document.querySelector(\'meta[name="description"]\').getAttribute(\'content\');',
  'return {\n      canonical: document.querySelector(\'link[rel="canonical"]\').getAttribute(\'href\'),\n      description: document.querySelector(\'meta[name="description"]\').getAttribute(\'content\')\n    };'
];
