var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/books');

require('./apps/routes')(app);

app.set('port', 3300);
app.listen(app.get('port'), function () {
  console.log('Server up: http://localhost:' + app.get('port'));
});
