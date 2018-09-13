//====================================================|
// WEBPACK DEV LOADERS: MEDIA


//--------------------------| Export

module.exports = {
  test: /\.(mp3|aac|ogg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'audio/[name].[ext]'
      }
    }
  ]
};
