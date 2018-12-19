const gulp = require('gulp')
const del = require('del')

const clean = path => {
  return del(path)
}
module.exports = clean
