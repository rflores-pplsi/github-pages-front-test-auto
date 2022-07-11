const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: false,
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
