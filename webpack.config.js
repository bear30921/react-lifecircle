const path = require('path');

module.exports = {
  entry: {
    'App': ['whatwg-fetch', './jsx/App.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js'
  },
  mode: "development",
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', 
                {
                  useBuiltIns: "usage",
                  corejs: 3
                }
              ],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties', 
              ['@babel/transform-runtime']
            ]
          }
        } 
      }
    ]
  }
};