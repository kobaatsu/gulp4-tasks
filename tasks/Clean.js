const gulp = require('gulp')
const del = require('del')

const Clean = path => {
  return del(path)
}
module.exports = Clean
