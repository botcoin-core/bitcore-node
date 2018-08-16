'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export botcore-lib', function() {
    var botcore = require('../');
    should.exist(botcore.lib);
    should.exist(botcore.lib.Transaction);
    should.exist(botcore.lib.Block);
  });
});
