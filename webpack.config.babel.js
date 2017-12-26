const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname);

let distConfig = {
  entry: path.resolve(sourcePath, 'src/index.js'),
  filename: 'reactsandbox.js'
}

if (process.env.NODE_ENV === 'DEV_SERVER') {
  distConfig.entry = path.resolve(sourcePath, 'assets/example.js')
  distConfig.filename = 'bundle.js'
}

const config = {
  target: 'web',
  entry: distConfig.entry,
  output: {
    path: __dirname,
    library: 'reactsandbox',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: distConfig.filename
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      sourcePath,
      path.resolve(__dirname, 'node_modules'),

      // yarn workspaces
      path.resolve(__dirname, '../../node_modules'),
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
      }
    ]
  },
  plugins: [],
}

if (process.env.NODE_ENV === 'PROD') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
    })
  )
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  )
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  config.plugins.push(new webpack.HashedModuleIdsPlugin())
}

module.exports = config;
