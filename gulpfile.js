var gulp = require('gulp');
var jshint = require('gulp-jshint');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['jshint']);
});

gulp.task('default', ['watch']);
