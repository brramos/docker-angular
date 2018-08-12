var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/dist/'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.use(function(req, res){
    res.status(200).sendFile(__dirname+'/dist/index.html');
});

if (module === require.main) {
    var server = app.listen(process.env.PORT || 8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', (host !== '::' ? host : 'localhost'), port);
  });
}

module.exports = app;
