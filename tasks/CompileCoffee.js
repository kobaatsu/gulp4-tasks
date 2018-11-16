const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const coffee = require('gulp-coffee');

const compileCoffee = (src, dist) => {
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler:
          notify.onError({
            title: 'JS Error: Line <%= error.line %>',
            message: '<%= error.message %>'
          })
      })
    )
    .pipe(
      coffee()
    )
    .pipe(gulp.dest(dist));
}

module.exports = compileCoffee;
