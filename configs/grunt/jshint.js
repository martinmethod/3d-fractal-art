module.exports = {
  options: {
    jshintrc: 'configs/linters/.jshintrc',
    debug: false
  },

  scripts: {
    src: ['<%= src %>/scripts/*.js', '<%= src %>/scripts/components/**/*.js']
  }
};