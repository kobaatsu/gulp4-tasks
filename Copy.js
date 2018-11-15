import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

export default function copy(src, dist) {
  console.log(`COPY ${src} -> ${dist}`);
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler:
        notify.onError({
          title: 'COPY Error: Line <%= error.line %>',
          message: '<%= error.message %>'
        })
      })
    )
    .pipe(gulp.dest(dist));
}
