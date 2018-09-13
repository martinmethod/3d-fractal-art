//====================================================|
// WEBPACK COMMON PLUGINS: FAVICONS


//--------------------------| Import

const CopyWebpackPlugin = require('copy-webpack-plugin');


//--------------------------| Configuration

const plugin = new CopyWebpackPlugin([{
  from: './client/src/assets/images',
  to: 'images'
}]);


//--------------------------| Export

module.exports = plugin;
