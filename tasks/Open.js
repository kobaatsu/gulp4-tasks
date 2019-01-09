const opn = require('opn')

const Open = urls => {
  return new Promise((resolve, reject) => {
    urls.forEach(elm => {
      console.log(`OPEN ${elm}`)
      opn(elm, { wait: false })
    })
    resolve()
  })
}

module.exports = Open
