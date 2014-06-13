var gulp = require('gulp'),
    durandal = require('gulp-durandal'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    less = require('gulp-less-sourcemap'),
    clean = require('gulp-clean');



gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('copy-to-tmp', function() {
  return gulp.src(['src/**/*', 'bower_components/requirejs-text/text.js'])
  .pipe(gulp.dest('.tmp/src'));
})

gulp.task('durandal', ['copy-to-tmp'], function() {
  return durandal({
    baseDir: '.tmp/src',
    minify: true,
  }).pipe(gulp.dest('dist/'))
    .pipe(gulp.src('.tmp').pipe(clean()));
});