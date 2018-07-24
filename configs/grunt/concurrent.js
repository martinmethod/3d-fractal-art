var grunt = require('grunt'),
    prod = grunt.option('target') === 'prod',

  styleTasks = prod ?
    ['sass', 'usebanner:styles'] :
    ['sass'],

  scriptTasks = prod ?
    ['requirejs', 'concat', 'uglify', 'usebanner:scripts'] :
    ['requirejs', 'concat', 'uglify'];

module.exports = {

  build: [
    // markup
    ['pug'],

    // styles
    styleTasks,

    // scripts
    scriptTasks,

    // images
    ['copy:images'],

    // audio
    ['copy:audio'],

    // video
    ['copy:video'],

    // favicons
    ['realFavicon']
  ],

  prod: [
    'htmlmin'
  ]

};