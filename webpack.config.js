module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    static: './dist',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader',
      },
    ],
  },
};
