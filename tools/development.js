process.env.NODE_ENV = 'development';

const opn = require('opn');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config');
const webpackConfig = require('./webpack.dev.conf');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  clientLogLevel: 'none',
  contentBase: config.build.distDir,
  publicPath: `http://localhost:${config.dev.port}${config.dev
    .assetsPublicPath}`,
  historyApiFallback: true,
  noInfo: true,
  port: config.dev.port,
  watchContentBase: true
});

server.listen(config.dev.port, '127.0.0.1', () => {
  console.log(`Project is running at http://localhost:${config.dev.port}`);

  if (config.dev.autoOpenBrowser) {
    opn(`http://localhost:${config.dev.port}`);
  }
});
