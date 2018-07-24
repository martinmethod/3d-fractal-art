var grunt = require('grunt');

module.exports = {
  task: {
    options: {
      pretty: grunt.option('target') !== 'prod',
      data: {
        debug: grunt.option('target') !== 'prod',
        app: grunt.project,
        pkg: grunt.file.readJSON('package.json')
      }
    },
    files: {
      '<%= dist %>/index.html': '<%= src %>/markup/index.pug'
    }
  }
};