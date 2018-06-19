module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
        options: {
          banner: '/*! main <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'js/main.js',
          dest: 'js/compress/main.min.js'
        }
    },
    watch: {
      dist: {
        files: 'js/main.js',
        tasks: 'uglify'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('watch-test', ['watch:dist']);
};