const bs = require('browser-sync')

const BrowserSync = (base, port, directory) => {
  let opts = {
    server: {}
  }
  opts.server.baseDir = base
  if (directory) {
    opts.server.directory = true
  }
  if (port) {
    opts.port = port
  }
  return bs.init(opts)
}

module.exports = BrowserSync
