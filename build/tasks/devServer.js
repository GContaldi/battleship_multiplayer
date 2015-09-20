var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config.js');

gulp.task('build', ['lint', 'webpack', 'less']);

gulp.task('html', function() {
  gulp.src(config.watch.html)
    .pipe(connect.reload());
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(config.watch.html, ['html']);

  gulp.watch(config.watch.less, ['less']);

  gulp.watch(config.watch.webpack, ['webpack']);
});

gulp.task('serve', ['build'], function() {
  connect.server({
    root: config.devServer.root,
    port: config.devServer.port,
    host: config.devServer.host,
    livereload: config.devServer.livereload
  });
});

gulp.task('dev-server', ['clean', 'build', 'serve', 'watch']);
