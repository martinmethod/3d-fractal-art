//====================================================|
// WEBPACK CONFIG: PROD


//--------------------------| Import

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('../../package.json');
const banner = require('./banner');


//--------------------------| Define

const dist = path.join(__dirname, '../../client/dist');


//--------------------------| Body

const config = {
  mode: 'production',
  entry: './client/src/index.js',
  output: {
    path: dist,
    filename: 'app.[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              // modules: true,
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './node_modules/compass-mixins/lib/_compass.scss',
                './client/src/styles/resources/data/**/*.scss',
                './client/src/styles/resources/placeholders/**/*.scss'
              ]
            },
          }
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader'
        }
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp3|aac|ogg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'audio/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['**/*.*'], {
      root:     dist,
      verbose:  true,
      dry:      false
    }),
    new HtmlWebpackPlugin({
      title: pkg.title,
      cover: `${pkg.homepage}/images/cover.jpg`,
      homepage: pkg.homepage,
      description: pkg.description,
      template: './client/src/markup.html',
      minify: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        preserveLineBreaks: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: "app.[chunkhash].css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_debugger: true,
          drop_console: true
        },
        output: {
          comments: false
        }
      }
    }),
    new CopyWebpackPlugin([{
      from: './client/src/assets/images',
      to: 'images'
    }]),
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: './client/src/assets/images/logo.png',
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons-[hash]/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats-[hash].json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: false,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#1ca9d9',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: pkg.title
    }),
    new webpack.BannerPlugin({ banner }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};


//--------------------------| Export

module.exports = config;
