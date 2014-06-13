var gulp = require('gulp'),
    durandal = require('gulp-durandal'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    less = require('gulp-less-sourcemap'),
    clean = require('gulp-clean'),
    jshint = require('gulp-jshint'),
    debug = require('gulp-debug');

gulp.task('default', ['connect', 'durandal', 'watch']);

gulp.task('connect', function() {
  connect.server({
    root: 'dist/src',
    livereload: true,
    port: 1339
  });
});

gulp.task('assets', ['durandal'], function() {
  return gulp.src(['src/assets/**/*.js', 'src/assets/**/*.html'])
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  watch({glob: ['src/**/*.js', 'src/**/*.html'], verbose: true}, ['assets']);
});

gulp.task('jshint', function() {
  return gulp.src('src/assets/**/*.js')
});

gulp.task('copy-to-tmp', function() {
  return gulp.src(['src/**/*', 'bower_components/requirejs-text/text.js'])
  .pipe(gulp.dest('.tmp/src'));
});

gulp.task('durandal', ['copy-to-tmp'], function() {
  return durandal({
    baseDir: '.tmp/src',
    minify: true,
  }).pipe(gulp.dest('dist/'))
    .pipe(gulp.src('.tmp').pipe(clean()))
});