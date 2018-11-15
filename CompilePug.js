import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import pug from 'gulp-pug';

export default function compilePug(src, dist, minify) {
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler:
          notify.onError({
            title: 'TEMPLATE Error: Line <%= error.line %>',
            message: '<%= error.message %>'
          })
      })
    )
    .pipe(
      pug({
        pretty: !minify,
      })
    )
    .pipe(gulp.dest(dist));
}
