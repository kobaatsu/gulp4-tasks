const tasks = {
  BrowserSync: require('./tasks/BrowserSync'),
  CompileCoffee: require('./tasks/CompileCoffee'),
  CompilePug: require('./tasks/CompilePug'),
  CompileStylus: require('./tasks/CompileStylus'),
  Copy: require('./tasks/Copy'),
  Empty: require('./tasks/Empty'),
  MinifyImage: require('./tasks/MinifyImage'),
  MinifyJs: require('./tasks/MinifyJs'),
  MinifyPhp: require('./tasks/MinifyPhp'),
  Open: require('./tasks/Open'),
  SvgStore: require('./tasks/SvgStore'),
  TemplateHeader: require('./tasks/TemplateHeader'),
}

module.exports = tasks
