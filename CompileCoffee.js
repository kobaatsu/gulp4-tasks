import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import coffee from 'gulp-coffee';

export default function compileCoffee(src, dist) {
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler:
          notify.onError({
            title: 'JS Error: Line <%= error.line %>',
            message: '<%= error.message %>'
          })
      })
    )
    .pipe(
      coffee()
    )
    .pipe(gulp.dest(dist));
}
