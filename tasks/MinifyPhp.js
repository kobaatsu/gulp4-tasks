const gulp = require('gulp')

const {phpMinify} = require('@cedx/gulp-php-minify')

const MinifyPhp = (src, dist, bin) => {
  let binary = {
    binary: '/usr/bin/php'
  }
  if (bin) {
    binary.binary = bin
  }
  return gulp
    .src(src)
    .pipe(
      phpMinify(binary)
    )
    .pipe(gulp.dest(dist))
}

module.exports = MinifyPhp
