const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const HhtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'node',
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] },

  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: { path: path.resolve(__dirname, 'dist'), publicPath: '/', filename: 'main.js' },
  watch: true,
  watchOptions: { ignored: /node_modules/, poll: 1000 },
  module: {
    rules: [
      { test: /\.[tj]sx?$/, exclude: /node_modules/, use: ['ts-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader?modules',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HhtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'sourse-map',
};