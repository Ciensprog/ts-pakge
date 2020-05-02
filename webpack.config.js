
//--------------------------------------------------------------------------------
//  Imports
//--------------------------------------------------------------------------------

const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { files } = require('./build.config');

//--------------------------------------------------------------------------------
//  Functions
//--------------------------------------------------------------------------------

const dir = (newPath = '') => path.resolve(__dirname, newPath);
const getType = (variable = undefined) => (/\[object (.*)\]/g.exec(
  Object.prototype.toString.call(variable))
)[1].toLowerCase();

//--------------------------------------------------------------------------------
//  ...
//--------------------------------------------------------------------------------

const common = {
  entry: '',
  output: {
    filename: '[name].js',
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [
      // new CleanWebpackPlugin(),
      new TsconfigPathsPlugin(),
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
    ],
  },

  stats: {
    // assets: false,
    // builtAt: false,
    // chunks: false,
    // colors: true,
    // entrypoints: false,
    // hash: false,
    // modules: false,
    // moduleAssets: false,
    // timings: false,
    // version: false,
  },
};

const config = [];

//--------------------------------------------------------------------------------
//  Multiple config files
//--------------------------------------------------------------------------------

const totalFiles = files.length;

if (totalFiles) {
  files.forEach((item, position) => {
    const data = {
      ...common,
      entry: dir(item.path),
      output: {
        ...common.output,
        filename: `${item.name}.js`,
        path: dir('dist'),
      },
    };

    if (getType(item.output) === 'string' && item.output.length) {
      data.output.path = dir(`dist/${item.output}`);
    }

    config.push(data);
  });
}

if (!config.length) {
  throw Error('No config specified...');
}

//--------------------------------------------------------------------------------
//  Export
//--------------------------------------------------------------------------------

module.exports = config;
