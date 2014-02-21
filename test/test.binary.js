
var assert = require('assert');
var request = require('../');

test('req.responseType( "arraybuffer" )', function(next){
  request('GET', 'test/transparent.png').responseType('arraybuffer').end(function(res){
    assert(res instanceof request.Response, 'respond with Response');
    assert(res.ok, 'response should be ok');
    assert(res.text === null, 'res.text is null');
    assert(res.body instanceof ArrayBuffer, 'res.body is ArrayBuffer');
    assert(true === false, 'should fail');
    next();
  });
});
