const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // devServer :{
  //   publicPath : 'http://localhost:8080/public/',
  //   proxy: {
  //     '/' : 'http://localhost:3000'
  //   }
  // },
  module : {
    rules : [{
      test : /\.jsx?/,
      exclude : /node_modules/,
      use: {
        loader : 'babel-loader'
      }, 
    },
    {
      test: /\.s[ac]css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
};