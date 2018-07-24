module.exports = function(grunt) {

  //--------------------------| Variables

  var path = require('path'),
      pkg = grunt.file.readJSON('package.json'),
      env = grunt.option('target') || 'dev',
      banner = grunt.file.read('configs/banner.txt');


  //--------------------------| Project data

  grunt.project = {
    pkg: pkg,
    env: env,
    banner: banner,
    port: 6004,
    dist: 'app',
    src: 'src',
    assetName: 'app',
    ga: 'UA-6064237-14'
  };


  //--------------------------| Time grunt

  require('time-grunt')(grunt);


  //--------------------------| Config

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'configs/grunt'),
    data: grunt.project
  });


  //--------------------------| Build

  grunt.registerTask('build', function() {
    grunt.log.writeln(('Building a ' + env + ' version.').green);

    grunt.task.run(['clean:all', 'concurrent:build']);

    if (env === 'prod') {
      grunt.task.run(['concurrent:prod']);
    }
  });


}; // exports
