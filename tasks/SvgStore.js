const gulp = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const svgo = require('gulp-svgo')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename')

const svgStore = (src, dist, name) => {
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler:
          notify.onError({
            title: 'SVG Error: Line <%= error.line %>',
            message: '<%= error.message %>'
          })
      })
    )
    .pipe(
      svgo({
        plugins: [
          { removeTitle: true },
          { removeAttrs: { attrs: '(fill|stroke|data.*)' } },
          { removeStyleElement: true },
          { cleanupIDs: false },
        ]
      })
    )
    .pipe(
      svgstore({ inlineSvg: true })
    )
    .pipe(
      rename({ basename: name })
    )
    .pipe(gulp.dest(dist))
}

module.exports = svgStore;
