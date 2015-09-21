var folders = {
  rootDir: __dirname + '/../'
};

folders.distDir = folders.rootDir + 'dist/';
folders.srcDir = folders.rootDir + 'resources/';
folders.specsDir = folders.rootDir + 'specs/';
folders.buildDir = folders.rootDir + 'build/';
folders.javascriptsDir = folders.srcDir + 'javascripts/';
folders.stylesheetsDir = folders.srcDir + 'stylesheets/';
folders.coverageDir = folders.rootDir + 'coverage/';

var config = {
  devServer: {
    host: 'localhost',
    port: 4000,
    root: '.',
    livereload: true
  },

  clean: {
    folders: [folders.distDir]
  },

  karma: {
    configPath: folders.rootDir + '/karma.conf.js'
  },

  lint: {
    srcFiles: folders.srcDir + '**/*.js',
    specsFiles: folders.specsDir + '**/*.js',
    buildFiles: folders.buildDir + '**/*.js'
  },

  less: {
    src: [folders.stylesheetsDir + 'main.less'],
    dest: folders.distDir,
    extension: '.min.css',
    destFilename: 'main.min.css'
  },

  watch: {
    less: [folders.stylesheetsDir + '**/*.less'],
    webpack: [folders.javascriptsDir + '**/*.js'],
    html: [folders.rootDir + 'index.html']
  },

  webpack: {
    entry: [folders.javascriptsDir + '/main.js'],
    output: {
      path: folders.distDir,
      filename: 'bundle'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        include: /(resources)/,
        loader: 'babel-loader',
        query: {
          modules: 'common'
        }
      }, {
        test: /\.json$/,
        loader: 'json'
      }]
    }
  }
};

config.folders = folders;
module.exports = config;
