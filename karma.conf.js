module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'], // run in Chrome, PhantomJS, Firefox
    frameworks: ['jasmine'], // use the mocha test framework
    files: [
      'node_modules/babel-core/browser-polyfill.js', // bind polyfill for phantomjs
      'tests.webpack.js' // just load this file
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'] // preprocess with webpack and our sourcemap loader
    },
    reporters: ['dots', 'coverage'], // report results in this format
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        preLoaders: [
          // transpile all files except testing sources with babel as usual
          {
            test: /\.js$/,
            exclude: [
              'resources/',
              'node_modules/'
            ],
            loader: 'babel'
          },
          // transpile and instrument only testing sources with isparta
          {
            test: /\.js$/,
            loader: 'isparta'
          },
          {
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: 'node_modules/'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },
     // optionally, configure the reporter
    coverageReporter: {
      type: 'lcovonly',
      dir: 'coverage/'
    }
  });
};
