const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, 'src');

const config = {
  target: 'web',
  entry: [path.resolve(sourcePath, 'index.js')],
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  },
  output: {
    path: __dirname,
    filename: 'reactsandbox.js'
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
  devServer: {
    contentBase: path.join(__dirname, "example"),
    compress: true,
    port: 9000
  }
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
      exclude: [/\.min\.js$/gi]
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
