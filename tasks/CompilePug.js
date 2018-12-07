const gulp = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const pug = require('gulp-pug')

const gulpif = require('gulp-if')
const rename = require('gulp-rename')

const compilePug = (src, dist, options) => {
  let opts = {}
  opts.pretty = true
  if (options) {
    if (options.pretty && options.pretty === false) {
      opts.pretty = false
    }
    if (options.locals) {
      opts.locals = options.locals
    }
    if (options.filters) {
      opts.filters = options.filters
    }
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
    .pipe(
      gulpif(
        options && options.ext,
        rename(path => {
          console.log(`COMPILE ${path.dirname}/${path.basename}.pug -> ${path.dirname}/${path.basename}.${options.ext}`)
          path.extname = `.${options.ext}`
        })
      )
    )
    .pipe(gulp.dest(dist))
}

module.exports = compilePug
