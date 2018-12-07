const tasks = {
  BrowserSync: require('./tasks/BrowserSync'),
  CompileCoffee: require('./tasks/CompileCoffee'),
  CompilePug: require('./tasks/CompilePug'),
  CompileStylus: require('./tasks/CompileStylus'),
  Copy: require('./tasks/Copy'),
  Empty: require('./tasks/Empty'),
  MinifyImage: require('./tasks/MinifyImage'),
  Open: require('./tasks/Open'),
  SvgStore: require('./tasks/SvgStore'),
}

module.exports = tasks
