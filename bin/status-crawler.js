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
const file         = require('../lib/file');
const v8flags      = require('v8flags');

program
  .version(pkg.version)
  .description('Where all the magic happens.')
  .option('-v, --verbose', 'I wanna know everything.')
  // .option('--start-url [value]', 'URL you want to start crawling with')
  // .option('--required-values [value]', 'Text that must exist in URL to crawl (comma separated list)')
  // .option('--skipped-values [value]', 'If the URL contains this text, it will skip (comma separated list)')
  // .option('--load-images', 'This will slow down the crawler (default: false)')
  // .option('--load-plugins', 'This will slow down the crawler (default: false)')
  // .option('--user-agent [value]', 'Override the default user agent')
  // .option('--ignore-ssl-errors', 'Ignore SSL errors that might prevent loading of pages (default: true)')
  // .option('--timeout <n>', 'Time in ms to wait for page to load (default: 5000ms)', parseInt)
  .option('-p, --path [value]', 'path to your config file if not in current or above cwd.')
  .option('-l, --limit <n>', '[debug] override the total links crawled.', parseInt)
  .option('-s, --save-file [value]', '[debug] turn off the json files being saved, or switch the directory')

program
  .command('init')
  .description('Create a fresh config file to start your crawl.')
  .option('-f, --force', 'Override existing .crawlerrc')
  .option('-c, --coffee', 'Create the config file in coffeescript instead.')
  .action(function() {
    file.createConfig();
  });

program.parse(process.argv);

const invoke    = function(env) {
  // console.log('my environment is:', env);
  // console.log('my cli options are:', argv);
  // console.log('my liftoff config is:', this);

  // If there is no config, throw error
  if (!env.configPath && program.args.length === 0) {
    console.log(chalk.red('No config file found'));
    console.log('To create a config, use: ', chalk.yellow('crawler init'));
    process.exit(1);
  }

  // Run Script
  if (program.args.length === 0) {
    lib(require(env.configPath), program);
  }
};

const cli = new Liftoff({
  name: 'crawler',
  extensions: objectAssign({'rc': null}, interpret.jsVariants),
  configName: '.crawler',
  v8flags: v8flags
});


cli.launch({
  cwd: argv.cwd,
  require: argv.require,
  completion: argv.completion
}, invoke);
