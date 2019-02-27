const gulp = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const concat = require('gulp-concat')

const Concat = (src, dist, filename) => {
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: 'CONCAT Error: Line <%= error.line %>',
          message: '<%= error.message %>'
        })
      })
    )
    .pipe(concat(filename))
    .pipe(gulp.dest(dist))
}

module.exports = Concat
