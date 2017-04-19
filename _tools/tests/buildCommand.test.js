'use strict';

const buildCommand = require('../lib/buildCommand.js');
const fs = require('fs');
const shell = require('shelljs');
const path = require('path');

describe('Build Tool Test', function() {

  it('Subject template have to be minify', function() {
    buildCommand.execute();
  });

});