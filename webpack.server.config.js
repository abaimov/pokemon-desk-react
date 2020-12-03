const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: 'node',
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] },

  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/server/server.js'),
  output: { path: path.resolve(__dirname, 'dist'), filename: 'server.js' },
  externals:[nodeExternals()]
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/, path.resolve(__dirname, 'src/server/server.js')],
        use: ['ts-loader'],
      },
      { test: /\.css$/, use: ['css-loader'] },
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
};
