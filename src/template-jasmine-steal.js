
"use strict";

var template = __dirname + '/templates/jasmine-steal.html',
    steal  = {
      '3.2.3' : __dirname + '/../vendor/steal-3.2.3'
    };

exports.process = function(grunt, task, context) {
  var stealUrl = context.options.stealOptions.stealUrl;

  // find the latest version if none given
  if (!stealUrl) {
    stealUrl = '.grunt/grunt-contrib-jasmine/steal/steal.js';
  }

  context.options.stealOptions = context.options.stealOptions || {};
  context.options.stealOptions.stealUrl = stealUrl;

  context.options.stealOptions.config = grunt.util._.extend({
  
  }, context.options.stealOptions.config);

  // put steal into place
  task.copyTempFile(steal['3.2.3'] + '/steal.js','steal/steal.js');
  task.copyTempFile(steal['3.2.3'] + '/dev/dev.js','steal/dev/dev.js');

  var source = grunt.file.read(template);
  return grunt.util._.template(source, context);
};

