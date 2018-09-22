const webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  path = require("path");

const SRC = path.resolve(__dirname, "src"),
  NODE_MODULES = path.resolve(__dirname, "node_modules"),
  JS = path.resolve(__dirname, "src/js"),
  BUILD = path.resolve(__dirname, "build");

process.env.NODE_ENV = "development";

const config = {
  context: path.resolve(__dirname),
  devtool: "source-map",
  entry: "./src/js/index.js",
  output: {
    pathinfo: true,
    filename: "[name][hash].js",
    publicPath: "/",
    path: BUILD
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    modules: [SRC, NODE_MODULES, JS]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ttf|svg|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: "url-loader", options: { limit: 10000 } }]
      },
      {
        test: /\.s?css/,
        include: [NODE_MODULES, SRC],
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      favicon: "./public/favicon.ico",
      inject: false,
      template: "./public/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      }
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  config.optimization = {
    minimizer: [new UglifyJsPlugin()]
  };
} else {
  config.devServer = {
    contentBase: "./build",
    port: 3000,
    host: "0.0.0.0",
    hot: true,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
