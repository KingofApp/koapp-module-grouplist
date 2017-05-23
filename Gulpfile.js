'use strict'
var gulp = require('gulp');
var gLog = require('gutil-color-log');

require('./gulp-tasks/lint.js');
require('./gulp-tasks/documentation.js');
require('./gulp-tasks/testing.js');
require('./gulp-tasks/integration.js');
require('./gulp-tasks/distribution.js');

gulp.task('distribution', ['dist-zip']);
gulp.task('default', ['watch-documentation', 'watch-bower', 'watch-config']);

gulp.task('versioncheck', function() {
  var packageJson = require ('./package.json');
  var configJson  = require ('./config.json');
  if (packageJson.version !== configJson.version) {
    var str = 'check version on package.json and config.json, must be the same. '+packageJson.version+' -> '+configJson.version;
    gLog('red', str);
    process.exit();
  }
});
