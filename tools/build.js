process.env.NODE_ENV = 'production';

const md = require('mkdirp');
const rm = require('rimraf');
const { ncp } = require('ncp');
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

// wipe dist directory for clean build and then run webpack
// remove distDir
rm(config.build.distDir, err => {
  if (err) throw err;

  // create distDir
  md(config.build.distDir, error => {
    if (error) throw error;

    // copy files from srcDir/static to distDir
    ncp(
      path.join(config.build.srcDir, 'static'),
      config.build.distDir,
      err2 => {
        if (err2) throw err2;

        webpack(webpackConfig, (err3, stats) => {
          if (err3) throw err3;

          console.log(
            `${stats.toString({
              colors: true,
              modules: false,
              children: false,
              chunks: false,
              chunkModules: false
            })}\n\n`
          );
        });
      }
    );
  });
});
