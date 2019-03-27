const open = require('open')

const Open = urls => {
  return new Promise((resolve, reject) => {
    urls.forEach(elm => {
      console.log(`OPEN ${elm}`)
      open(elm, { wait: false })
    })
    resolve()
  })
}

module.exports = Open
