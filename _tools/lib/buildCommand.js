'use strict';

function getGulpEnv() {
  const gulp = require('gulp');
  const debug = require('gulp-debug');

  gulp.task('subject', function() {
    console.log('subject');
    return gulp.src('D:/_job/mail/gitlab/email-layouts/_tools/tests/tmp/buildCommand.test/partners/0786104665bf19102c21cee7/trigger/activities/078f9e999872e516c4607a7/subject.template')
      .pipe(debug({title: 'unicorn:'}));
  });

  return {
    start: function() {
      gulp.start('subject');
    }
  };
}

function execute(args) {
  let gulpEnv = getGulpEnv();
  gulpEnv.start();
}

module.exports = {
  execute: execute
}