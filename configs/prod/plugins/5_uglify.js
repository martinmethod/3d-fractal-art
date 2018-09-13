//====================================================|
// WEBPACK PROD PLUGINS: UGLIFY


//--------------------------| Import

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


//--------------------------| Configuration

const plugin = new UglifyJsPlugin({
  uglifyOptions: {
    compress: {
      drop_debugger: true,
      drop_console: true
    },
    output: {
      comments: false
    }
  }
});


//--------------------------| Export

module.exports = plugin;
