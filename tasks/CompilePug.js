const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const pug = require('gulp-pug');

const compilePug = (src, dist, minify, locals) => {
  let opts = {}
  opts.pretty = minify? false : true;
  if (locals) {
    opts.locals = locals
  }
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler:
          notify.onError({
            title: 'TEMPLATE Error: Line <%= error.line %>',
            message: '<%= error.message %>'
          })
      })
    )
    .pipe(
      pug(opts)
    )
    .pipe(gulp.dest(dist));
}

module.exports = compilePug;
