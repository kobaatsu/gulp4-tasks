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

const gulpif = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')

const CompileStylus = (src, dist, option) => {
  let opts = []
  if (option.mqpack) {
    opts.push(mqpacker({ sort: true }))
  }
  if (option.sort) {
    opts.push(sorting(require('../.postcss-sorting.json')))
  }
  if (option.prefix) {
    opts.push(autoprefixer())
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
    .src(src)
    .pipe(gulpif(sourcemapOpts, sourcemaps.init()))
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
    .pipe(gulpif(sourcemapOpts, sourcemaps.write()))
    .pipe(gulp.dest(dist))
}

module.exports = CompileStylus
