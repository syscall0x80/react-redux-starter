var _ = require("lodash");
var express = require('express');
var httpProxy = require('http-proxy');

var app = new express();
var port = 3000;

var proxy = httpProxy.createProxyServer({});

//app.use()
app.use('/static', express.static(__dirname+'/static'));
app.use('/fonts', express.static(__dirname + '/fonts'));

app.use(function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
