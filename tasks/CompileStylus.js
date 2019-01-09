const gulp = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const stylus = require('gulp-stylus')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const nano = require('cssnano')
const sorting = require('postcss-sorting')
const prettify = require('postcss-prettify')

const CompileStylus = (src, dist, option) => {
  let opts = []
  if (option.mqpack) {
    opts.push(mqpacker({ sort: true }))
  }
  if (option.sort) {
    opts.push(sorting(require('../.postcss-sorting.json')))
  }
  if (option.prefix) {
    let pfOpts = {}
    if (option.prefix.browsers) {
      pfOpts.browsers = option.prefix.browsers
    } else {
      pfOpts.browsers = ['last 1 versions']
    }
    opts.push(autoprefixer(pfOpts))
  }
  opts.push(nano())
  if (!option.minify) {
    opts.push(prettify())
  }

  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: 'STYLUS Error: Line <%= error.line %>',
          message: '<%= error.message %>'
        })
      })
    )
    .pipe(stylus({ 'include css': true }))
    .pipe(postcss(opts))
    .pipe(gulp.dest(dist))
}

module.exports = CompileStylus
