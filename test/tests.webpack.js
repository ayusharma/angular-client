/**
 * Webpack test configuration
 * Reference: https://github.com/webpack-contrib/karma-webpack
 * require all modules ending in "-test" from the
 * current directory and all subdirectories
 */


 var context = require.context('./', true, /-test\.js$/);
 context.keys().forEach(context);
