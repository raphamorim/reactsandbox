const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const sourcePath = path.join(__dirname, 'src');

const config = {
  entry: [path.resolve(sourcePath, 'example.js')],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      sourcePath,
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
        include: sourcePath
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: []
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJsPlugin()
  )
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  )
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  config.plugins.push(new webpack.HashedModuleIdsPlugin())
}

module.exports = config;
