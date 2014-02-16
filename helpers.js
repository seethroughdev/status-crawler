// Turn a (possibly) relative URI into a full RFC 3986-compliant URI
// With minor modifications, courtesy: https://gist.github.com/Yaffle/1088850
function absoluteUri(base, href) {
  'use strict';

  // Parse a URI and return its constituent parts
  function parseUri(url) {
    var match = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
    return (match ? { href: match[0] || '', protocol: match[1] || '', authority: match[2] || '', host: match[3] || '', hostname: match[4] || '',
                      port: match[5] || '', pathname: match[6] || '', search: match[7] || '', hash: match[8] || '' } : null);
  }

  // Resolve dots in the path
  function resolvePathDots(input) {
    var output = [];
    input.replace(/^(\.\.?(\/|$))+/, '')
         .replace(/\/(\.(\/|$))+/g, '/')
         .replace(/\/\.\.$/, '/../')
         .replace(/\/?[^\/]*/g, function (part) { part === '/..' ? output.pop() : output.push(part); });
    return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
  }

  // Parse base and href
  href = parseUri(href || '');
  base = parseUri(base || '');

  // Build and return the URI
  return !href || !base ? null : (href.protocol || base.protocol) +
         (href.protocol || href.authority ? href.authority : base.authority) +
         (resolvePathDots(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname))) +
         (href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) + href.hash;

}
exports.absoluteUri = absoluteUri;

// build filename for log
function getFilename(fileLocation) {
  'use strict';

  // Get filename for log
  var today = new Date(),
      yyyy = today.getFullYear(),
      mm = today.getMonth() + 1,
      d = today.getDate();

  if (mm < 10) {mm = '0' + mm;}
  if (d < 10) {d = '0' + d;}

  var filename = fileLocation;

  filename += yyyy + '-' + mm + '-' + d + '.json';

  return filename;
}

exports.getFilename = getFilename;

// get status colors
function statusColor(status) {
  'use strict';

  var statusStyle;

  switch(status) {
    case 200:
      statusStyle = {fg: 'green', bold: true};
      break;
    case 404:
      statusStyle = {fg: 'red', bold: true};
      break;
    default:
      statusStyle = {fg: 'orange', bold: true};
      break;
  }

  return statusStyle;
}

exports.statusColor = statusColor;

// prepare array
function prepareArr(arr) {
  'use strict';
  arr = arr.replace(/ /g, '');
  arr = arr.split(',');
  return arr;
}

exports.prepareArr = prepareArr;
