var grunt = require('grunt'),
    prod = grunt.option('target') === 'prod';

module.exports = {
  options: {
    mainConfigFile: '<%= src %>/scripts/config.js',
    removeCombined: true,
    optimize: prod ? 'uglify2' : 'none',
    uglify2: {
      compress: {
        drop_debugger: prod,
        drop_console: prod
      },
      preserveComments: false,
      quoteStyle: 1
    },
    wrapShim: true,
    generateSourceMaps: !prod,
    preserveLicenseComments: false
  },

  app: {
    options: {
      dir: '<%= dist %>/js',
      modules: [
        {
          name: '<%= assetName %>',
          create: true,
          include: [
            'config',
            'appDesktop',
            'appMobile'
          ]
        }
      ]
    }
  }
};