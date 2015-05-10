module.exports = function(page, opts) {

  if (opts.useragent) {
    page.useragent(opts.useragent);
  }
  
  return page;
};
