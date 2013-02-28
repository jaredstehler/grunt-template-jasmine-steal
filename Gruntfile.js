/*global module:false*/
module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        node : true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['src/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test']
      }
    },
    connect: {
      test: {
        port: 8000,
        base: '.'
      }
    },
    jasmine: {
      steal: {
        src: 'test/fixtures/steal/src/**/*.js',
        options: {
          specs: 'test/fixtures/steal/spec/*Spec.js',
          helpers: 'test/fixtures/steal/spec/*Helper.js',
          host: 'http://127.0.0.1:<%= connect.test.port %>/',
          template : require('./'),
          templateOptions: {
            stealOptions : {
              baseUrl: '../..'
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('test', ['connect', 'jasmine:steal']);

  // Default task.
  grunt.registerTask('default', ['jshint','test']);

};
