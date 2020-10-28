const path = require("path");
const NODE_ENV = process.env.NODE_ENV;
const HhtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: { path: path.resolve(__dirname, "dist"), filename: "main.js" },
  module: {
    rules: [
      { test: /\.[tj]sx?$/, use: ["ts-loader"] },
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]__[hash:base64:5]",
                auto: /\.modules\.\w+$/i,
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HhtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  devtool: "sourse-map",
};
