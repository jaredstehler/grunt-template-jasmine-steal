
"use strict";

var template = __dirname + '/templates/jasmine-steal.html',
    steal  = {
      '3.2.3' : __dirname + '/../vendor/steal-3.2.3'
    };

exports.process = function(grunt, task, context) {
  var version = context.options.version;

  // find the latest version if none given
  if (!version) {
    version = Object.keys(steal).sort().pop();
  }

  context.options.stealOptions = context.options.stealOptions || {};

  context.options.stealOptions.config = grunt.util._.extend({
  
  }, context.options.stealOptions.config);

  // put steal into place
  task.copyTempFile(steal[version] + '/steal.js','steal/steal.js');
  task.copyTempFile(steal[version] + '/dev/dev.js','steal/dev/dev.js');

  var source = grunt.file.read(template);
  return grunt.util._.template(source, context);
};

