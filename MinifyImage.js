import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import svgo from 'gulp-svgo';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import mozjpeg from 'imagemin-mozjpeg';

export default function MinifyImage(src, dist) {
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: 'MINIFY IMAGE Error: Line <%= error.line %>',
          message: '<%= error.message %>'
        })
      })
    )
    .pipe(
      changed(dist)
    )
    .pipe(
      imagemin([
        pngquant({
          quality: '65-80',
          speed: 1,
          floyd: 0
        }),
        mozjpeg({
          quality: 85,
          progressive: true
        }),
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle(),
      ])
    )
    .pipe(gulp.dest(dist));
}
