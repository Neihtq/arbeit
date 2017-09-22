
var express = require('express');
var fs      = require('fs');
var path    = require('path');

var content = fs.readFileSync('test.json');
var data    = JSON.parse(content);

var app = express();
app.set('port', process.env.PORT || 5001);
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/readJSON.html');
    //res.send(data);
});

app.get('/jsons', function(req, res) {
    res.send('data');
});

app.listen(app.get('port'), function() {
    console.log("Server rennt");
});