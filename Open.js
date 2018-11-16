const gulp = require('gulp');

const opn = require('opn');

const open = urls => {
  urls.forEach(elm => {
    console.log(`OPEN ${elm}`);
    opn(elm, { wait: false });
  })
}

module.exports = open;
