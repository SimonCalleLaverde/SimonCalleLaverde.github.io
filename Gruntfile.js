module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['assets/js/_grunt/*.js'],
        dest: 'assets/js/main.js',
      },
    },
    
    uglify: {
      options: {
      },
      my_target: {
        files: {
          'assets/js/main.js': ['assets/js/main.js']
        }
      }
    },
    
    watch: {
      scripts: {
        files: ['assets/js/_grunt/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Task(s).
  grunt.registerTask('default', ['concat', 'uglify']);//, 'imagemin'
  grunt.registerTask('dev', ['concat', 'watch']);

};