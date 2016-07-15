'use strict';

var trim = require('lodash.trim');
var isEmpty = require('lodash.isempty');

var classify = require('../../lib/classify');

exports.message = 'Custom plugin generator:';

exports.questions = [{
  name: 'name',
  message: 'What\'s the name of this plugin?',
  validate: function (s) {
    return !isEmpty(trim(s)) || 'Sorry, a name is required.';
  },
  filter: classify
}, {
  name: 'description',
  message: '(Optional) What does this plugin do?',
  default: null,
  filter: trim
}, {
  type: 'confirm',
  name: 'proceed',
  message: 'Is that OK to proceed?'
}];