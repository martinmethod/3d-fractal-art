module.exports = {
  options: {
    livereload: false,
    event: ['changed', 'added', 'deleted']
  },

  markup: {
    files: ['<%= src %>/markup/**/*.pug'],
    tasks: ['puglint', 'clean:markup', 'pug']
  },

  styles: {
    files: ['<%= src %>/styles/**/*.scss', '<%= src %>/**/data-uri/**/*.*'],
    tasks: ['sasslint:app', 'clean:styles', 'sass:app']
  },

  scripts: {
    files: ['<%= src %>/scripts/**/*.*'],
    tasks: ['jshint', 'clean:scripts', 'requirejs', 'concat', 'uglify']
  },

  images: {
    files: ['<%= src %>/images/**/*.*'],
    tasks: ['clean:images', 'copy:images']
  },

  audio: {
    files: ['<%= src %>/audio/**/*.*'],
    tasks: ['clean:audio', 'copy:audio']
  },

  video: {
    files: ['<%= src %>/video/**/*.*'],
    tasks: ['clean:video', 'copy:video']
  },

  favicons: {
    files: ['<%= src %>/favicon.jpg'],
    tasks: ['clean:favicons', 'realFavicon']
  }
};