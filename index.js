var express = require('express')
var fs = require('fs')
var cool = require('cool-ascii-faces')

var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html');
  var dataString = buf.toString();
  response.send(dataString);
})

app.get('/cool', function(request, response) {
  response.send(cool());
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
