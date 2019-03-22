'use strict';

function wiredep(grunt) {
  grunt.registerMultiTask('npm-wiredep', 'Inject NPM packages into your source code.', function () {
    this.requiresConfig(['npm-wiredep', this.target, 'src']);

    var options = this.options(this.data);
    require('npm-wiredep')(options);
  });
}

module.exports = wiredep;
