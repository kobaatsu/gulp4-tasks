const gulp = require('gulp');

const bs = require('browser-sync');

const browserSync = (base, port, directory) => {
  let opts = {
    server: {}
  };
  opts.server.baseDir = base;
  if (directory) {
    opts.server.directory = true;
  }
  if (port) {
    opts.port = port;
  }
  return bs.init(opts);
}

module.exports = browserSync;
