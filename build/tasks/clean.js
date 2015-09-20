var gulp = require('gulp');
var del = require('del');
var cleanConf = require('../config.js').clean;

gulp.task('clean', function() {
  return del(cleanConf.folders);
});
