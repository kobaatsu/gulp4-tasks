const gulp = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const markdown = require('gulp-markdown')

const CompileMarkdown = (src, dist, options) => {
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: 'MARKDOWN Error: Line <%= error.line %>',
          message: '<%= error.message %>'
        })
      })
    )
    .pipe(markdown(options))
    .pipe(gulp.dest(dist))
}

module.exports = CompileMarkdown
