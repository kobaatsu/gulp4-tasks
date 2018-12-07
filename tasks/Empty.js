const gulp = require('gulp')
const rimraf = require('rimraf')

const empty = path => {
  return new Promise((resolve, reject) => {
    rimraf(path, error => {})
    resolve()
  })
}

module.exports = empty
