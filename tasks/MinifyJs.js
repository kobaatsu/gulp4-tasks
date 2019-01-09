const gulp = require('gulp')

const uglifyEs = require('uglify-es')
const composer = require('gulp-uglify/composer')

const minify = composer(uglifyEs, console)

const MinifyJs = (src, dist) => {
  return gulp
    .src(src)
    .pipe(minify())
    .pipe(gulp.dest(dist))
}

module.exports = MinifyJs
