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
  const opts = []
  if (option.mqpack) {
    opts.push(mqpacker({ sort: true }))
  }
  if (option.sort) {
    opts.push(sorting(require('../.postcss-sorting.json')))
  }
  if (option.prefix || option.grid) {
    const prefixOpts = {}
    if (option.grid) {
      prefixOpts.grid = option.grid
    }
    opts.push(autoprefixer(prefixOpts))
  }
  let commentOpts = true
  if (option.removeComments === false) {
    commentOpts = false
  }
  opts.push(
    nano({
      preset: ['default', { discardComments: commentOpts }]
    })
  )
  if (!option.minify) {
    opts.push(prettify())
  }
  const sourcemapOpts = !!option.sourcemap

  return gulp
    .src(src, { sourcemaps: sourcemapOpts })
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
    .pipe(gulp.dest(dist, { sourcemaps: sourcemapOpts }))
}

module.exports = CompileStylus
