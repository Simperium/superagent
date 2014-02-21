var request = superagent;

test('req.responseType( "arraybuffer" )', function(next){
  request('GET', 'transparent.png').responseType('arraybuffer').end(function(res){
    assert(res instanceof request.Response, 'respond with Response');
    assert(res.ok, 'response should be ok');
    assert(res.text === null, 'res.text is null');
    assert(res.body instanceof ArrayBuffer, 'res.body is ArrayBuffer');
    next();
  });
});
