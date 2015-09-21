module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'], // run in Chrome, PhantomJS, Firefox
    frameworks: ['jasmine'], // use the mocha test framework
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js', // bind polyfill for phantomjs
      'tests.webpack.js', // just load this file
      {
        pattern: 'resources/**/*.js',
        included: false
      },
      {
        pattern: 'specs/**/*.js',
        included: false
      }
    ],
    preprocessors: {
      'resources/**/*.js': ['eslint'],
      'specs/**/*.js': ['eslint'],
      'tests.webpack.js': ['webpack', 'sourcemap'] // preprocess with webpack and our sourcemap loader
    },
    reporters: ['dots'], // report results in this format
    eslint: {
      stopOnError: true,
      stopOnWarning: false
    },
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    }
  });
};
