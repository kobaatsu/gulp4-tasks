const gulp = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const pug = require('gulp-pug')

const gulpif = require('gulp-if')
const rename = require('gulp-rename')

const CompilePug = (src, dist, options) => {
  const opts = {}
  opts.pretty = true
  opts.rename = false
  opts.ext = false
  opts.doctype = 'html'
  if (options) {
    if (options.pretty === false) {
      opts.pretty = false
    }
    if (options.doctype) {
      opts.doctype = options.doctype
    }
    if (options.locals) {
      opts.locals = options.locals
    }
    if (options.filters) {
      opts.filters = options.filters
    }
    if (options.rename) {
      opts.rename = true
    }
    if (options.ext) {
      opts.ext = true
    }
  }
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: 'PUG Error: Line <%= error.line %>',
          message: '<%= error.message %>'
        })
      })
    )
    .pipe(pug(opts))
    .pipe(
      gulpif(
        opts.rename,
        rename(path => {
          console.log(
            `COMPILE ${path.dirname}/${path.basename}.pug -> ${options.rename}`
          )
          var renameElms = options.rename.split('.')
          path.basename = renameElms.shift()
          path.extname = '.' + renameElms.join('.')
        })
      )
    )
    .pipe(
      gulpif(
        opts.ext,
        rename(path => {
          console.log(
            `COMPILE ${path.dirname}/${path.basename}.pug -> ${path.dirname}/${path.basename}.${options.ext}`
          )
          path.extname = `.${options.ext}`
        })
      )
    )
    .pipe(gulp.dest(dist))
}

module.exports = CompilePug
