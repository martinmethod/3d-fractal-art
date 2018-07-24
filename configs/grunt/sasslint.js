module.exports = {
  options: {
    files: {
      ignore: '<%= src %>/styles/plugins/**/*.scss'
    }
  },
  app: [
    '<%= src %>/styles/**/*'
  ]
};