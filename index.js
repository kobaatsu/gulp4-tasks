const CompileCoffee = require('./CompileCoffee');
const CompilePug = require('./CompilePug');
const CompileStylus = require('./CompileStylus');
const Copy = require('./Copy');
const MinifyImage = require('./MinifyImage');
const Open = require('./Open');

const tasks = {
  CompileCoffee,
  CompilePug,
  CompileStylus,
  Copy,
  MinifyImage,
  Open,
}

module.exports = tasks;
