const path =require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: [path.resolve(__dirname,'src/index.js')],

  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test:  /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options:{
              "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
              ]
          }
        },
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,"src",'index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production'),
      IS_DEVELOPMENT:false
    })
  ]
};