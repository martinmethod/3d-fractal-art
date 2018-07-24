var grunt = require('grunt');

module.exports = {
  options: {
    separator: grunt.option('target') !== 'prod' ? ';\n\n\n\n' : ';\n',
    stripBanners: grunt.option('target') !== 'prod' ? false : {force: true}
  },

  app: {
    src: [
      'node_modules/css-browser-selector/css_browser_selector.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/lightbox2/src/js/lightbox.js',
      '<%= src %>/libs/jquery-ui.min.js',
      'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
      'node_modules/requirejs/require.js'
    ],
    dest: '<%= dist %>/js/libs.js'
  }
};