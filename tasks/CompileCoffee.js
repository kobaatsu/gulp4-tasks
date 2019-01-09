const gulp = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const coffee = require('gulp-coffee')

const CompileCoffee = (src, dist) => {
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: 'COFFEE Error: Line <%= error.line %>',
          message: '<%= error.message %>'
        })
      })
    )
    .pipe(coffee())
    .pipe(gulp.dest(dist))
}

module.exports = CompileCoffee
