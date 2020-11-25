const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
