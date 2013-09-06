# Spider for CasperJS

As you probably already know.  [casperJS](http://casperjs.org/) is an awesome library
that wraps an api around the equally as awesome, [phantomJS](http://phantomjs.org/).

They make scripting inside web pages on a real browser easy.

This script will crawl your site and log all urls, response codes, errors and warnings to a json file for parsing.

--------

### Getting Started

You can run the whole thing by setting your config options in spider.js and navigating to the folder in your CL and typing:

``` casperjs spider.js```

Or you can pass arguments directly in from the command line like so:

``` casperjs --start=http://espn.com --requiredValue=espn.com,nfl,fantasy spider.js ```

*Casper go in the middle, and they will override config options in the script themselves*

### Config Options

There are several configuration options in casperjs-spider.  You can set them individually in the command line, or by editing the config portion of [spider.js](https://github.com/pensive612/casperjs-spider/blob/master/spider.js).

*It might help to refer to the default config options in the top of [spider.js](https://github.com/pensive612/casperjs-spider/blob/master/spider.js) for examples*

**start-url** *\*required*

- ```--start-url=http://espn.com```
- ```config.startUrl = 'http://espn.com';```
- Also defined as config.startUrl in spider.js.  This is the starting URL for your spider to crawl.

**required-values** *\*required*

- ```--required-values=espn.com```
- ```config.requiredValues = 'espn.com';```
- Also defined as config.requiredValues in spider.js.  This is a comma-separated list of all required strings.
- This field intentionally defaults to localhost, because you need to use it to spider correctly.
- *Make sure you put your top-level domain in here to keep from spidering the internet!*
- Leave off the protocol to allow for subdomains if you have them.

**skipped-values**

- Also defined as config.skippedValues in spider.js.  This is a comma-separated list of all skipped strings.
- ```--skipped-values=mailto,install,#,blog/,comment```
- ```config.skippedValues = 'mailto,install,#,blog/,comment';```
- *It might be helpful to skip URLs like mailto, install, forums, blogs etc...*

**file-location** *default=./logs/*

- ```--file-location=./logs/```
- ```config.fileLocation = './logs/';```
- Also defined as config.fileLocation in spider.js.  This is a path to where you want the data.json file to be saved.

**date-file-name** *default=false*

- ```--date-file-name=false```
- ```config.dateFileName = false;```
- Also defined as config.dateFileName in spider.js.  This is a boolean to replace the filename data.json with the current date.  ie.  2013-12-22.json.  In case you want to keep versions.

**verbose** *default=false*

- ```--verbose=false```
- ```config.verbose = false;```
- Also defined as config.verbose in spider.js.  This is a boolean to put casper into verbose mode.

**log-level** *default=error*

- ```--log-level=error```
- ```config.logLevel = 'error';```
- Also defined as config.logLevel in spider.js.  SpiderJS allows you to set a logging level. can be [error, warning, info, debug]

### Conclusion

That's about it!  Feel free to edit for yourself, or send a pull-request with an improvement.

This script wouldn't be possible without [PlanZero](http://planzero.org/blog/2013/03/07/spidering_the_web_with_casperjs) whose script I started with in the very beginning.  I highly recommend still checking it out for a bare-bones version.

Oh, and please only use this for good. :}
