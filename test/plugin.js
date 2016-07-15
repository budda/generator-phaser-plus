/*
 * Phaser plugin generator test suite.
 */

'use strict';

var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('plugin generator', function () {
  before(function () {
    return helpers.run(require.resolve('../generators/plugin'))
      .withPrompts({
        name: 'Test',
        description: 'Just a test plugin.'
      })
      .withLocalConfig({
        dirs: {
          plugins: 'some-dir'
        }
      })
      .toPromise();
  });

  it('creates a test plugin class', function () {
    var file = 'some-dir/Test.js';
    assert.file(file);
    assert.fileContent(file, '* Just a test plugin.');
    assert.fileContent(file, 'class Test extends Phaser.Plugin');
  });
});