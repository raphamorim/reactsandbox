import path from 'path'
import webpack from 'webpack'

const config = {
  target: 'web',
  entry: path.resolve(__dirname, 'assets/example.js'),
  output: {
    path: __dirname,
    libraryTarget: 'umd',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, '../../node_modules/react'),
    },
    extensions: ['.js'],
    modules: [
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
    ],
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

export default config;
