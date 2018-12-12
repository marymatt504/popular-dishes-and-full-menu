var BrotliPlugin = require('brotli-webpack-plugin');
var BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  // plugins: [
  //   new BrotliGzipPlugin({
  //     asset: '[path].br[query]',
  //     algorithm: 'brotli',
  //     test: /\.(js|css|html|svg)$/,
  //     threshold: 10240,
  //     minRatio: 0.8,
  //     quality: 11
  //   }),
  //   new BrotliGzipPlugin({
  //     asset: '[path].gz[query]',
  //     algorithm: 'gzip',
  //     test: /\.(js|css|html|svg)$/,
  //     threshold: 10240,
  //     minRatio: 0.8
  //   })
  // ],
};
