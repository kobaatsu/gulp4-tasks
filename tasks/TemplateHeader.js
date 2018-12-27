const gulp = require('gulp')
const header = require('gulp-header')

const templateHeader = (template, data, src, dist) => {
  return gulp
    .src(src)
    .pipe(header(template, data))
    .pipe(gulp.dest(dist))
}

module.exports = templateHeader
