var gulp = require('gulp');
var eslint = require('gulp-eslint');
var friendlyFormatter = require('eslint-friendly-formatter');

var lintConf = require('../config.js').lint;

gulp.task('eslint', function() {
  return gulp.src([
    lintConf.srcFiles,
    lintConf.specsFiles,
    lintConf.buildFiles,
    lintConf.confFiles
  ])
  // eslint() attaches the lint output to the eslint property
  // of the file object so it can be used by other modules.
  .pipe(eslint())
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
  .pipe(eslint.format(friendlyFormatter))
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failOnError last.
  .pipe(eslint.failOnError());
});

gulp.task('lint', ['eslint']);
