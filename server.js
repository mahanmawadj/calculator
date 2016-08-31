var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)

// configuration =================

app.use(express.static(__dirname + '/public'));                // set the static files location /public/img will be /img for users
app.use(morgan('dev'));    

// listen (start app with node server.js) ======================================
app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.render('public/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});	
	