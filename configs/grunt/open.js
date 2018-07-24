var browser = process.platform === 'win32' ? 'Chrome' : 'Google Chrome';

module.exports = {
  app: {
    app: browser,
    path: 'http://localhost:<%= port %>'
  }
};