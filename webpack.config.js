const path = require('path');

const htmlPlugin = require('html-webpack-plugin');
const reactRefresh = require('@pmmmwh/react-refresh-webpack-plugin');
const tsconfigPaths = require('tsconfig-paths-webpack-plugin');

const developing = process.env.NODE.ENV !== 'production';

module.exports = {
  mode: developing ? 'development' : 'production',
  devtool: developing ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'source', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new tsconfigPaths({
        configFile: 'tsconfig.json'
      })
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true
  },
  plugins: [
    developing && new reactRefresh(),
    new htmlPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              developing && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
