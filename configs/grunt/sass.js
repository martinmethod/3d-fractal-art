var grunt = require('grunt'),
    sass = require('node-sass'),
    fs = require('fs'),
    path = require('path'),
    mime = require('mime-types'),
    sassDataURI = require('lib-sass-data-uri'),
    nodeSassGlobbing = require('node-sass-globbing');

module.exports = {
  options: {
    importer: nodeSassGlobbing,
    functions: Object.assign(sassDataURI)
  },

  app: {
    options: {
      outputStyle: grunt.option('target') !== 'prod' ? 'extended' : 'compressed',
      sourceMap: grunt.option('target') !== 'prod'
    },
    files: {
      '<%= dist %>/css/<%= assetName %>.css': '<%= src %>/styles/<%= assetName %>.scss'
    }
  }
};