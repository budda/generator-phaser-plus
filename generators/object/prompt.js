'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const yorc = require('../../lib/yorc');
const prompt = require('../../lib/prompt');
const classify = require('../../lib/classify');

const greeting = 'Object class generator:\n';

const questions = g => [{
  name: 'name',
  message: `What's the object name?`,
  filter: classify,
  validate: s => !isEmpty(s) || 'Sorry, a name is required.',
  when: !g.name
}, {
  name: 'description',
  message: 'Give it a short description (optional)',
  default: null,
  filter: trim,
  when: !g.name
}, {
  type: 'list',
  name: 'baseClass',
  message: 'From which base class this object extends from?',
  choices: [
    'Sprite',
    'Group',
    'Image',
    'Button',
    'Text',
    'Graphics',
    {
      name: 'None',
      value: null
    }
  ],
  when: !g.name
}];

module.exports = function (g) {
  return prompt(g, greeting, questions(g))
    .then(processCLI)
    .then(processInputs);

  function processCLI(inputs) {
    return Object.assign({
      name: classify(g.name),
      description: trim(g.options.description),
      baseClass: 'Sprite'
    }, inputs);
  }
  function processInputs(inputs) {
    return Object.assign(g, {
      baseTemplate: yorc.get(g, 'baseTemplate'),
      outDir: yorc.get(g, 'dirs').objects,
      outFilename: `${inputs.name}.js`,
      variables: {
        name: inputs.name,
        underline: '='.repeat(inputs.name.length),
        baseClass: inputs.baseClass,
        description: inputs.description
      }
    });
  }
};
