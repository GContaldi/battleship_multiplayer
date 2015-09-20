var gulp = require('gulp');
var karma = require('karma');
var runSequence = require('run-sequence');
var karmaConfig = require('../config').karma;
var singleRun = true;

gulp.task('test-no-quit', function(done) {
  var server = new karma.Server({
    configFile: karmaConfig.configPath,
    singleRun: singleRun
  }, function(exitCode) {
    if (exitCode === 0) {
      done();
    } else {
      var msg = 'Tests failed with exit code:' + exitCode;
      console.error(msg); // eslint-disable-line no-console
      throw msg;
    }
  });

  server.start();
});

gulp.task('test-single-run', function(cb) {
  runSequence('test-no-quit');
  cb();
});

gulp.task('test', function(cb) {
  singleRun = false;
  runSequence('test-no-quit');
  cb();
});
