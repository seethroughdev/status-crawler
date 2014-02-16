/*
 * casperjs-spider v 0.6.1
 * https://github.com/seethroughtrees/casperjs-spider
 *
 * Copyright (c) 2014 @seethroughtrees
 * Licensed under the MIT license.
 *
 * script inspired and borrowed from: PlanZero, Yaffle, CasperJS, MDN
 * http://planzero.org/blog/2013/03/07/spidering_the_web_with_casperjs
 */


(function(window,document,undefined){
  'use strict';

  var utils   = require('utils'),
      helpers = require('./helpers'),
      fs      = require('fs'),
      config  = require('./config');


  // ##################  WORKING CODE  #################

  // Create Casper
  var casper = require('casper').create({
    verbose: config.verbose,
    logLevel: config.logLevel,
    pageSettings: {
      loadImages: false,
      loadPlugins: config.loadPlugins
    }
  });

  // Echo options hash to screen
  utils.dump(casper.cli.options);

  // ##################  Initializing Vars  #################

  // URL arrays
  var visitedUrls = [], pendingUrls = [], skippedUrls = [];

  // required and skipped values
  var requiredValues = casper.cli.get('required-values') || config.requiredValues,
      skippedValues = casper.cli.get('skipped-values') || config.skippedValues,
      linkLimit     = casper.cli.get('limit') || config.limit;


  // setting hard value for linkLimit so it doesn't go on forever
  if (linkLimit === 0) {
    linkLimit = 10000;
  }


  // Initializing Data Object
  var dataObj = {
    start: casper.cli.get('start-url') || config.startUrl,
    date: new Date(),
    dateFileName: casper.cli.get('date-file-name') || config.dateFileName,
    requiredValues: helpers.prepareArr(requiredValues),
    skippedValues: helpers.prepareArr(skippedValues),
    links: [],
    errors: [],
    messages: [],
    skippedLinksCount: 0,
    logFile: '',
    linkCount: 1
  };


  // ##################  Spider Function  #################

  var spider = function(url) {

    // Add the URL to visited stack
    visitedUrls.push(url);

    // Open the URL and modify
    casper.open(url).then(function() {

      // ##################  Setup Link Data  #################

      // Get current response status of URL
      var status = this.status().currentHTTPStatus;

      // Log url
      this.echo(this.colorizer.format(status, helpers.statusColor(status)) + ' ' + url);

      // Instantiate link object for log
      var link = {
        url: url,
        status: status
      };

      // Push links to dataObj
      dataObj.links.push(link);


      // ##################  Process Links on Page  #################

      var baseUrl = this.getGlobal('location').origin;

      // Find links on the current page
      var localLinks = this.evaluate(function() {
        var links = [];
        __utils__.findAll('a[href]').forEach(function(e) {
          links.push(e.getAttribute('href'));
        });
        return links;
      });

      // iterate through each localLink
      this.each(localLinks, function(self, link) {

        // if url contains text
        var containsText = function (element, index, array) {
          return (newUrl.indexOf(array[index]) >= 0);
        };

        // Get new url
        var newUrl = helpers.absoluteUri(baseUrl, link);

        // If url is not visited, pending or skipped:
        if (pendingUrls.indexOf(newUrl) === -1 &&
            visitedUrls.indexOf(newUrl) === -1 &&
            skippedUrls.indexOf(newUrl) === -1) {

          // if newUrl is not does not contain skipped, and does have required
          if (!dataObj.skippedValues.some(containsText) &&
              dataObj.requiredValues.every(containsText)) {

            pendingUrls.push(newUrl);

          } else {

            // add it to skipped array
            skippedUrls.push(newUrl);

            casper.log('Skipping ' + newUrl, 'debug');

            // add to counted skipped links
            dataObj.skippedLinksCount++;

            return;
          }
        } // eof visited, pending, skipped
      }); // eof each links

      // If there are any more URLs, run again.
      if (pendingUrls.length > 0 && dataObj.linkCount < linkLimit) {
        var nextUrl = pendingUrls.shift();
        dataObj.linkCount++;
        spider(nextUrl);
      } else {
        casper.log('There are no more URLs to be processed!', 'Warning');
      }
    }); // eof page function
  }; // eof spider function


  // Start Spidering!
  casper.start(dataObj.start, function() {
    this.log('Starting to spider ' + dataObj.start, 'info');
    spider(dataObj.start);
  });

  casper.run();

  // if console error exists
  casper.on('page.error', function(msg, trace) {
    var error = {
      msg: msg,
      file: trace[0].file,
      line: trace[0].line,
      func: trace[0]['function']
    };

    this.log('ERROR: ' + error.msg, 'error');
    this.log('file: ' + error.file, 'warning');
    this.log('line: ' + error.line, 'warning');
    this.log('function: ' + error.func, 'warning');

    dataObj.errors.push(error);
  });

  // if console message exists
  casper.on('remote.message', function(msg) {
    this.log('MESSAGE: ' + msg, 'WARNING');
    var message = {
      url: casper.getGlobal('location').href,
      msg: msg
    };
    dataObj.messages.push(message);
  });

  // stop crawl if there's an internal error
  casper.on('error', function(msg, backtrace) {
    this.log('INTERNAL ERROR: ' + msg, 'ERROR' );
    this.log('BACKTRACE:' + backtrace, 'WARNING');
    this.die('Crawl stopped because of errors.');
  });

  // after crawl is complete, write json file with results
  casper.on('run.complete', function() {
    var fileLocation = casper.cli.get('file-location') || config.fileLocation;
    var filename;

    // set filename for logging
    if (dataObj.dateFileName) {
      filename = helpers.getFilename(fileLocation) + '-data.json';
    } else {
      filename = fileLocation + 'data.json';
    }

    dataObj.logFile = filename;

    var data = JSON.stringify(dataObj, undefined, 2);

    // write json file
    fs.write(filename, data, 'w');

    this.echo('Crawl has completed!', 'INFO');
    this.echo('Data file can be found at ' + filename + '.', 'INFO');
  });

})(this, this.document);
