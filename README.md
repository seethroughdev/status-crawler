# Spider for CasperJS

As you probably already know.  [casperJS](http://casperjs.org/) is an awesome library
that wraps around the equally awesome, [phantomJS](http://phantomjs.org/).

This script will crawl your site and log all urls, response codes, errors and warnings to a json file for parsing.

--------

### What casperjs-spider does

- Spiders whatever site you want it to
- Returns list of:
  - all links with response codes
  - all javascript errors from console
  - all ssl insecure warnings
  - all warning messages
- Does not repeat URLs
- Allows you to skip specified terms
- Allows you to require specified terms
- Exports a data.json file with your results

### Getting Started

You can run the whole thing by setting your config options in spider.js and navigating to the folder in your CL and typing:

``` casperjs spider.js```

Or you can pass arguments directly into the command line like this:

``` casperjs --start-url=http://espn.com --required-values=espn.com,nfl,fantasy spider.js ```

*Casper arguments go in the middle, and they will override config options in the script.*

### Config Options

There are several configuration options in casperjs-spider.  You can set them individually in the command line, or by editing the config portion of [spider.js](https://github.com/pensive612/casperjs-spider/blob/master/spider.js).

*It might help to refer to the default config options in the top of [spider.js](https://github.com/pensive612/casperjs-spider/blob/master/spider.js) for examples*

**start-url** *\*required*

- Also defined as config.startUrl in spider.js.  This is the starting URL for your spider to crawl.
- ```--start-url=http://espn.com```
- ```config.startUrl = 'http://espn.com';```

**required-values** *\*required*

- Also defined as config.requiredValues in spider.js.  This is a comma-separated list of all required strings.
- ```--required-values=espn.com```
- ```config.requiredValues = 'espn.com';```
- *Make sure you put your top-level domain in here to keep from spidering the internet!*
- Leave off the protocol so it will allow for subdomains if you have them.

**skipped-values**

- Also defined as config.skippedValues in spider.js.  This is a comma-separated list of all skipped strings.
- *It might be helpful to skip URLs like mailto, install, forums, blogs etc...*
- ```--skipped-values=mailto,install,\#,blog/,comment```
- ```config.skippedValues = 'mailto,install,#,blog/,comment';```

**file-location** *default=./logs/*

- Also defined as config.fileLocation in spider.js.  This is a path to where you want the data.json file to be saved.
- ```--file-location=./logs/```
- ```config.fileLocation = './logs/';```

**date-file-name** *default=false*

- Also defined as config.dateFileName in spider.js.  This is a boolean to replace the filename data.json with the current date.  ie.  2013-12-22.json.  In case you want to keep versions.
- ```--date-file-name=false```
- ```config.dateFileName = false;```

**verbose** *default=false*

- Also defined as config.verbose in spider.js.  This is a boolean to put casper into verbose mode.
- ```--verbose=false```
- ```config.verbose = false;```

**log-level** *default=error*

- Also defined as config.logLevel in spider.js.  SpiderJS allows you to set a logging level. can be [error, warning, info, debug]
- ```--log-level=error```
- ```config.logLevel = 'error';```

**load-images** *default=false*

- Also defined as config.loadImages in spider.js.  SpiderJS allows you to disable images from loading in the crawler.  This speeds up the crawl, and is generally not necessary for output.
- ```--load-images=false```
- ```config.loadImages = 'false';```

**load-plugins** *default=false*

- Also defined as config.loadPlugins in spider.js.  SpiderJS allows you to disable plugins from loading in the crawler.  This speeds up the crawl, and is generally not necessary for output.
- ```--load-plugins=false```
- ```config.loadPlugins = 'false';```



### Conclusion

Feel free to edit for yourself, or send a pull-request with any improvements.

This script wouldn't be possible without [PlanZero](http://planzero.org/blog/2013/03/07/spidering_the_web_with_casperjs) whose script I started with in the very beginning.  I highly recommend still checking it out for a bare-bones version.
