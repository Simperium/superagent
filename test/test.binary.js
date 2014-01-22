
var assert = require('assert');
var request = require('../');

test('req.responseType( "arraybuffer" )', function(next){
  request('GET', 'test/transparent.png').responseType('arraybuffer').end(function(res){
    assert(res instanceof request.Response, 'respond with Response');
    assert(res.ok, 'response should be ok');
    assert(res.text instanceof  , 'res.text');
    next();
  });

  var port = window.location.port; || 80;
  var hostname = window.location.hostname;

  request
  .get('http://' + hostname + ':' + port + '/xdomain')
  .withCredentials()
  .end(function(res){
    assert(200 == res.status);
    assert('tobi' == res.text);
    next();
  })
})

test('x-domain failure', function(next){
  request
  .get('http://google.com')
  .end(function(err, res){
    assert(err, 'error missing');
    assert(err.crossDomain, 'not .crossDomain');
    next();
  });
});

