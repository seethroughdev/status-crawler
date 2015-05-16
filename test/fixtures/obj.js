module.exports = {
  'meta': {
    'type': 'pages',
    'total': 20,
    'date': '2015-05-16T08:06:30.736Z',
    'config': {
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
    }
  },
  'data': [
    {
      'links': [
        'http://grantland.com/',
        'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/',
        'http://grantland.com/tags/mlb/',
        'http://grantland.com/features/',
        'http://grantland.com/contributors/ben-lindbergh/',
        'http://grantland.com/features/gay-talese-address-book/',
        'http://grantland.com/tags/writing/',
        'http://grantland.com/contributors/gaspar-gonzalez/',
        'http://grantland.com/features/jamie-xx-in-colour/',
        'http://grantland.com/tags/music/',
        'http://grantland.com/contributors/carrie-battan/',
        'http://grantland.com/features/blur-the-magic-whip-reunion/',
        'http://grantland.com/contributors/amos-barshad/',
        'http://grantland.com/the-triangle/',
        'http://grantland.com/the-triangle/a-eulogy-for-if-only-the-bulls-as-we-know-them-are-probably-done/',
        'http://grantland.com/tags/2015-nba-playoffs/',
        'http://grantland.com/contributors/zach-lowe/',
        'http://grantland.com/the-triangle/a-half-baked-ideas-podcast-special-presentation-starting-lineup-figurines/',
        'http://grantland.com/tags/collectibles/',
        'http://grantland.com/contributors/david-jacoby-and-kevin-wildes/'
      ],
      'errors': [],
      'messages': [],
      'issues': [
        {
          'url': 'http://grantland.com/contributors/gaspar-gonzalez/',
          'status': 'fail'
        },
        {
          'url': 'http://grantland.com/tags/music/',
          'status': 'fail'
        },
        {
          'url': 'http://grantland.com/contributors/amos-barshad/',
          'status': 'fail'
        },
        {
          'url': 'http://grantland.com/tags/2015-nba-playoffs/',
          'status': 'fail'
        },
        {
          'url': 'http://grantland.com/the-triangle/a-half-baked-ideas-podcast-special-presentation-starting-lineup-figurines/',
          'status': 'fail'
        }
      ],
      'status': [],
      'timeouts': [],
      'resources': [
        {
          'url': 'http://grantland.com/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 54,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f1a2dbaa68&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff2b56140e4&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/',
          'msg': {
            'errorCode': 203,
            'errorString': 'Error downloading http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/mraid.js - server replied: Not Found',
            'id': 31,
            'status': 404,
            'statusText': 'Not Found',
            'url': 'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/mraid.js'
          }
        },
        {
          'url': 'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/',
          'msg': {
            'errorCode': 203,
            'errorString': 'Error downloading http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/mraid.js - server replied: Not Found',
            'id': 36,
            'status': 404,
            'statusText': 'Not Found',
            'url': 'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/mraid.js'
          }
        },
        {
          'url': 'http://grantland.com/features/2015-mlb-jeff-trout-mike-trout-father/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 64,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f6c615c&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff1e9097074&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/tags/mlb/',
          'msg': {
            'errorCode': 203,
            'errorString': 'Error downloading http://grantland.com/tags/mlb/mraid.js - server replied: Not Found',
            'id': 34,
            'status': 404,
            'statusText': 'Not Found',
            'url': 'http://grantland.com/tags/mlb/mraid.js'
          }
        },
        {
          'url': 'http://grantland.com/tags/mlb/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 48,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f1d1a09718&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff2c9d44118&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/features/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 40,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f370274ba8&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff148b5f458&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/features/gay-talese-address-book/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 72,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f3a02d79cc&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff2e3ed1cf8&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/tags/writing/',
          'msg': {
            'errorCode': 203,
            'errorString': 'Error downloading http://grantland.com/tags/writing/mraid.js - server replied: Not Found',
            'id': 34,
            'status': 404,
            'statusText': 'Not Found',
            'url': 'http://grantland.com/tags/writing/mraid.js'
          }
        },
        {
          'url': 'http://grantland.com/contributors/gaspar-gonzalez/',
          'msg': {
            'errorCode': 203,
            'errorString': 'Error downloading http://grantland.com/contributors/gaspar-gonzalez/mraid.js - server replied: Not Found',
            'id': 34,
            'status': 404,
            'statusText': 'Not Found',
            'url': 'http://grantland.com/contributors/gaspar-gonzalez/mraid.js'
          }
        },
        {
          'url': 'http://grantland.com/contributors/gaspar-gonzalez/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 49,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f23e3f9f3&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ffcde6dfb8&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/features/jamie-xx-in-colour/',
          'msg': {
            'errorCode': 203,
            'errorString': 'Error downloading http://grantland.com/features/jamie-xx-in-colour/mraid.js - server replied: Not Found',
            'id': 41,
            'status': 404,
            'statusText': 'Not Found',
            'url': 'http://grantland.com/features/jamie-xx-in-colour/mraid.js'
          }
        },
        {
          'url': 'http://grantland.com/features/jamie-xx-in-colour/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 63,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f2194e62f&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff5724dcc8&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/tags/music/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 42,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f42256434&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff2772d474&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/features/blur-the-magic-whip-reunion/',
          'msg': {
            'errorCode': 203,
            'errorString': 'Error downloading http://grantland.com/features/blur-the-magic-whip-reunion/mraid.js - server replied: Not Found',
            'id': 27,
            'status': 404,
            'statusText': 'Not Found',
            'url': 'http://grantland.com/features/blur-the-magic-whip-reunion/mraid.js'
          }
        },
        {
          'url': 'http://grantland.com/features/blur-the-magic-whip-reunion/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 61,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f2117179e4&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff1604a3c3c&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/contributors/amos-barshad/',
          'msg': {
            'errorCode': 203,
            'errorString': 'Error downloading http://grantland.com/contributors/amos-barshad/mraid.js - server replied: Not Found',
            'id': 34,
            'status': 404,
            'statusText': 'Not Found',
            'url': 'http://grantland.com/contributors/amos-barshad/mraid.js'
          }
        },
        {
          'url': 'http://grantland.com/contributors/amos-barshad/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 49,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=fb1b9c184&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ffdac009e&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/the-triangle/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 39,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f9ef61c3c&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff157d88a24&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/the-triangle/a-eulogy-for-if-only-the-bulls-as-we-know-them-are-probably-done/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 26,
            'status': null,
            'statusText': null,
            'url': 'http://www.youtube.com/embed/CnCnB91DrGQ?version=3&rel=1&fs=1&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent'
          }
        },
        {
          'url': 'http://grantland.com/the-triangle/a-eulogy-for-if-only-the-bulls-as-we-know-them-are-probably-done/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 27,
            'status': null,
            'statusText': null,
            'url': 'http://www.youtube.com/embed/NPjwf-s20CA?version=3&rel=1&fs=1&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent'
          }
        },
        {
          'url': 'http://grantland.com/the-triangle/a-eulogy-for-if-only-the-bulls-as-we-know-them-are-probably-done/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 28,
            'status': null,
            'statusText': null,
            'url': 'http://www.youtube.com/embed/1GNLTyWn-Do?version=3&rel=1&fs=1&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent'
          }
        },
        {
          'url': 'http://grantland.com/the-triangle/a-eulogy-for-if-only-the-bulls-as-we-know-them-are-probably-done/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 29,
            'status': null,
            'statusText': null,
            'url': 'http://www.youtube.com/embed/ioNUFyegTPY?version=3&rel=1&fs=1&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent'
          }
        },
        {
          'url': 'http://grantland.com/the-triangle/a-eulogy-for-if-only-the-bulls-as-we-know-them-are-probably-done/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 30,
            'status': null,
            'statusText': null,
            'url': 'http://www.youtube.com/embed/jjyDMQUqoW8?version=3&rel=1&fs=1&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent'
          }
        },
        {
          'url': 'http://grantland.com/the-triangle/a-eulogy-for-if-only-the-bulls-as-we-know-them-are-probably-done/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 31,
            'status': null,
            'statusText': null,
            'url': 'http://www.youtube.com/embed/3j9_jfzcYGU?version=3&rel=1&fs=1&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent'
          }
        },
        {
          'url': 'http://grantland.com/tags/2015-nba-playoffs/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 47,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f137517128&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff22c5de878&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/contributors/zach-lowe/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 48,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f2c7ff8abc&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff220395c14&relation=parent&error=unknown_user'
          }
        },
        {
          'url': 'http://grantland.com/the-triangle/a-half-baked-ideas-podcast-special-presentation-starting-lineup-figurines/',
          'msg': {
            'errorCode': 203,
            'errorString': 'Error downloading http://grantland.com/the-triangle/a-half-baked-ideas-podcast-special-presentation-starting-lineup-figurines/mraid.js - server replied: Not Found',
            'id': 38,
            'status': 404,
            'statusText': 'Not Found',
            'url': 'http://grantland.com/the-triangle/a-half-baked-ideas-podcast-special-presentation-starting-lineup-figurines/mraid.js'
          }
        },
        {
          'url': 'http://grantland.com/the-triangle/a-half-baked-ideas-podcast-special-presentation-starting-lineup-figurines/',
          'msg': {
            'errorCode': 5,
            'errorString': 'Operation canceled',
            'id': 63,
            'status': 200,
            'statusText': 'OK',
            'url': 'http://static.ak.facebook.com/connect/xd_arbiter/NM7BtzAR8RM.js?version=41#cb=f1528f722&domain=grantland.com&origin=http%3A%2F%2Fgrantland.com%2Ff2c0d313b8&relation=parent&error=unknown_user'
          }
        }
      ]
    }
  ]
};
