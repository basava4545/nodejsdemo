var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var itemRouter = require('./routers/item');

var app = express();

var PORT = 8080;
var HOST_NAME = '127.0.0.1:27017';
var DATABASE_NAME = 'Items';

mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', itemRouter);
app.get('/',function(req,res){
  res.send("<center><b>Hello</b></center>\n<center><p><b>Welcome to Nodejs world</b></p></center>");

});

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
