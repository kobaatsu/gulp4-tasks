const tasks = {
  BrowserSync: require('./tasks/BrowserSync'),
  Clean: require('./tasks/Clean'),
  CompileCoffee: require('./tasks/CompileCoffee'),
  CompilePug: require('./tasks/CompilePug'),
  CompileStylus: require('./tasks/CompileStylus'),
  Copy: require('./tasks/Copy'),
  MinifyImage: require('./tasks/MinifyImage'),
  MinifyJs: require('./tasks/MinifyJs'),
  MinifyPhp: require('./tasks/MinifyPhp'),
  Open: require('./tasks/Open'),
  SvgStore: require('./tasks/SvgStore'),
  TemplateHeader: require('./tasks/TemplateHeader'),
  Webpack: require('./tasks/Webpack'),
}

module.exports = tasks
