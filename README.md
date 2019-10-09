# gulp4-tasks

## about

個人用gulp 4.0 タスク設定

## TASKS

### BrowserSync(base, port, directory)

```gulpfile.js
const tasks = require('gulp4-tasks')

const server = cb => {
  tasks.BrowserSync('./dev', 8080, true)
  cb()
}
exports.server = server
```

#### directory

https://www.browsersync.io/docs/options#option-server

default `false`

### Clean(path)

### CompileCoffee(src, dist)

### CompileMarkdown(src, dist[, options])

#### options

[markdown options](https://marked.js.org/#/USING_ADVANCED.md)

### CompilePug(src, dist[, options])

```gulpfile.js
const tasks = require('gulp4-tasks')

const opts = {
  pretty: true,
  locals: {
    moment: require('moment')
  },
  filters: {
    php: require('pug-php-filter')
  },
  ext: 'php'
}

const compilePug2Php = () => tasks.CompilePug('*.pug', 'path/dist', opts)
exports.compilePug2Php = compilePug2Php
```

#### options

##### pretty

bool

default `true`

##### locals

object

##### filters

object

##### ext

string

### CompileStylus(src, dist[, options])

```gulpfile.js
const tasks = require('gulp4-tasks')

const opts = {
  mqpack: true,
  minify: false,
  sort: true,
  prefix: true,
  removeComments: true
}

const createCss = () => tasks.CompileStylus('./*.styl', 'path/dist', opts)
exports.createCss = createCss
```

autoprefixer options -> https://github.com/browserslist/browserslist#readme

#### options

##### grid

bool, string

default `false`

##### mqpack

bool

default `false`


##### sort

bool

default `false`

##### prefix

bool

##### minify

bool

default `false`

##### removeComments

bool

default `true`

### Concat(src, dist, filename)

#### src

glob or array

### Copy(src, dist)

### MinifyImage(src, dist)

### MinifyJs(src, dist)

### MinifyPhp(src, dist)

### Open(urls)

### SvgStore(src, dist, filename)

### TemplateHeader(template, data, src, dist)

```gulpfile.js
const tasks = require('gulp4-tasks')

const template = `
/*
  Theme Name: <%= pkg.name %>
  Theme URI: <%= pkg.homepage %>
  Author: <%= pkg.author %>
  Author URI: <%= pkg.homepage %>
  Description: <%= pkg.description %>
  Version: <%= pkg.version %>
*/
`
const data = { pkg: require('./package.json') }
const createWPStyleSheet = () => tasks.TemplateHeader(template, data, 'style.css', 'path/dist')
exports.createWPStyleSheet = createWPStyleSheet
```

### Webpack(src, dist, config)

```gulpfile.js
const tasks = require('gulp4-tasks')

let config = require('./webpack.config')
const bundleJs = cb => {
  config.mode = 'development'
  config.devtool = 'source-map'
  config.output = { filename: 'bundle.js' }
  tasks.Webpack('path/js/src.js', 'path/dist', config)
  cb()
}
exports.bundleJs = bundleJs
```
