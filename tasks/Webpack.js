const gulp = require('gulp')
const wp = require('webpack')
const wpStream = require('webpack-stream')

const webpack = (src, dist, config) => {
  return gulp.src(src)
    .pipe(
      wpStream(config, wp)
        .on('error', function(e) {
          this.emit('end')
        })
    )
    .pipe(gulp.dest(dist))
}

module.exports = webpack
