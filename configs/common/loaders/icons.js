//====================================================|
// WEBPACK DEV LOADERS: ICONS


//--------------------------| Export

module.exports = {
  test: /\.svg/,
  use: {
    loader: 'svg-url-loader'
  }
};
