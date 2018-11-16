const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const pug = require('gulp-pug');

const compilePug = (src, dist, minify) => {
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
      pug({
        pretty: !minify,
      })
    )
    .pipe(gulp.dest(dist));
}

module.exports = compilePug;
