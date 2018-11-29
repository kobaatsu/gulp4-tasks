const BrowserSync = require('./tasks/BrowserSync');
const CompileCoffee = require('./tasks/CompileCoffee');
const CompilePug = require('./tasks/CompilePug');
const CompileStylus = require('./tasks/CompileStylus');
const Copy = require('./tasks/Copy');
const MinifyImage = require('./tasks/MinifyImage');
const Open = require('./tasks/Open');
const SvgStore = require('./tasks/SvgStore');

const tasks = {
  BrowserSync,
  CompileCoffee,
  CompilePug,
  CompileStylus,
  Copy,
  MinifyImage,
  Open,
  SvgStore,
}

module.exports = tasks;
