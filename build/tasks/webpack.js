var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var connect = require('gulp-connect');

var webpackConf = require('../config.js').webpack;

gulp.task('webpack', function() {

  return gulp.src(webpackConf.entry)

    .pipe(named(function() {
      return webpackConf.output.filename;
    }))

    .pipe(webpack({
      module: webpackConf.module
    }))

    .pipe(gulp.dest(webpackConf.output.path))

    .pipe(connect.reload());
});
