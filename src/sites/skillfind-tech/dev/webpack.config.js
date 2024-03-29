var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var ROOT_DIR = path.join(__dirname, '../../../../')
var SRC_DIR = path.join(__dirname, '../dev')
var DIST_DIR = path.join(__dirname, '../client')

var config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: SRC_DIR + '/index.js',
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    allowedHosts: 'all',
    historyApiFallback: {
      index: '/index.html',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  module: {
    rules: [
      {
        test: /(\.jsx?|.tsx?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: ROOT_DIR + 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'isomorphic-style-loader-react18',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.html$/i,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/sites/skillfind-tech/dev/index.html',
      favicon: './src/sites/skillfind-tech/dev/favicon.ico',
    }),
    new webpack.DefinePlugin({ APP_ENV: JSON.stringify(process.env.APP_ENV) }),
  ],
}

module.exports = config
