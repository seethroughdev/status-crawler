#!/usr/bin/env node

'use strict';

const Liftoff      = require('liftoff');
const interpret    = require('interpret');
const objectAssign = require('object-assign');
const argv         = require('minimist')(process.argv.slice(2));
const program      = require('commander');
const chalk        = require('chalk');
const pkg          = require('../package.json');
const lib          = require('../lib/index');

program
  .version(pkg.version)
  .option('-v, --verbose', 'Tell me everything you know')
  .option('--start-url [value]', 'URL you want to start crawling with')
  .option('--required-values [value]', 'Text that must exist in URL to crawl (comma separated list)')
  .option('--skipped-values [value]', 'If the URL contains this text, it will skip (comma separated list)')
  .option('--log-level [value]', 'The amount of data that will be shown in the terminal')
  .option('--load-images', 'This will slow down the crawler (default: false)')
  .option('--load-plugins', 'This will slow down the crawler (default: false)')
  .option('--user-agent [value]', 'Override the default user agent')
  .option('--ignore-ssl-errors', 'Ignore SSL errors that might prevent loading of pages (default: true)')
  .option('--timeout <n>', 'Time in ms to wait for page to load (default: 5000ms)', parseInt)
  .option('--limit <n>', 'Limit the amount of links to be crawled (default: 10000)', parseInt)
  .parse(process.argv);

const invoke    = function(env) {
  // console.log('my environment is:', env);
  // console.log('my cli options are:', argv);
  // console.log('my liftoff config is:', this);

  // If there is no config, throw error
  if (!env.configPath) {
    console.log(chalk.red('No config file found'));
    process.exit(1);
  }

  // Run Script
  lib(require(env.configPath), program);
};

const cli = new Liftoff({
  name: 'crawler',
  extensions: objectAssign({'rc': null}, interpret.jsVariants),
  configName: '.crawler',
  v8flags: require('v8flags')
});

cli.launch({
  cwd: argv.cwd,
  require: argv.require,
  completion: argv.completion
}, invoke);
