import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import stylus from 'gulp-stylus';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import clean from 'postcss-clean';
import sorting from 'postcss-sorting';
import prettify from 'postcss-prettify';

export default function compileStylus(src, dist, option) {
  let opts = [];
  if (option.mqpack) { opts.push(mqpacker({ sort: true })); }
  if (option.sort) { opts.push(sorting(require('./.postcss-sorting.json'))); }
  if (option.prefix) {
    let pfOpts = {};
    if (option.prefix.browsers) {
      pfOpts.browsers = option.prefix.browsers;
    } else {
      pfOpts.browsers = ['last 1 versions']
    }
    opts.push(autoprefixer(pfOpts));
  }
  opts.push(clean({ level: 2 }));
  if (!option.minify) {
    opts.push(prettify());
  }

  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler:
          notify.onError({
            title: 'CSS Error: Line <%= error.line %>',
            message: '<%= error.message %>'
          })
      })
    )
    .pipe(
      stylus({ 'include css': true })
    )
    .pipe(
      postcss(
        opts
      )
    )
    .pipe(gulp.dest(dist));
}
