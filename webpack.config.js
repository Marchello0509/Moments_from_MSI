const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    inedx: './index.js',
    main: './main.js',
    welcome: './welcome.js',
    reg: './reg.js',
    profile: './profile.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};