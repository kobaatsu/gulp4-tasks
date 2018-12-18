const gulp = require('gulp')
const opn = require('opn')

const open = urls => {
  return new Promise((resolve, reject) => {
    urls.forEach(elm => {
      console.log(`OPEN ${elm}`)
      opn(elm, { wait: false })
    })
    resolve()
  })
}

module.exports = open
