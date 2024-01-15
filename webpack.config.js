const path = require('path');

module.exports = {
  mode: 'development',
  entry: './indexjs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};