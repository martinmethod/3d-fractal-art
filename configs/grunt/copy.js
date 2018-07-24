var path = require('path');

module.exports = {

  // Images
  images: {
    files: [{
      expand: true,
      cwd: '<%= src %>/images',
      src: ['**'],
      dest: '<%= dist %>/images/'
    },{
      expand: true,
      cwd: 'node_modules/lightbox2/src/images',
      src: ['**'],
      dest: '<%= dist %>/images/'
    }]
  },

  // Audio
  audio: {
    files: [{
      expand: true,
      cwd: '<%= src %>/audio',
      src: ['**'],
      dest: '<%= dist %>/audio/'
    }]
  },

  // Video
  video: {
    files: [{
      expand: true,
      cwd: '<%= src %>/video',
      src: ['**'],
      dest: '<%= dist %>/video/'
    }]
  }

};