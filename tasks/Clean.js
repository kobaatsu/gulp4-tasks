const gulp = require('gulp')
const del = require('del')

const clean = path => {
  return new Promise((resolve, reject) => {
    del(path).then(resolve())
  })
}

module.exports = clean
