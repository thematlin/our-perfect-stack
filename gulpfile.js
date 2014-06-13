var gulp = require('gulp'),
    durandal = require('gulp-durandal'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    less = require('gulp-less-sourcemap');

gulp.src(['src/**/*', 'bower_components/requirejs-text/text.js'])
  .pipe(gulp.dest('.tmp/src'));

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('durandal', function() {
  return durandal({
    baseDir: '.tmp/src',
    minify: true,
  }).pipe(gulp.dest('dist/'));
});