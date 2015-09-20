var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var lessConf = require('../config.js').less;

var cleancss = new LessPluginCleanCSS({ advanced: true });
var autoprefix = new LessPluginAutoPrefix({ browsers: ['last 2 versions'] });

gulp.task('less', function() {
  return gulp.src(lessConf.src)

    .pipe(less({
      plugins: [autoprefix, cleancss]
    }))

    .pipe(rename(function(path) {
      path.extname = lessConf.extension;
    }))

    .pipe(gulp.dest(lessConf.dest));
});
