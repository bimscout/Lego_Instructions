var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/api/themes', require('./controllers/api/themes'));
app.use(require('./controllers/static'));

app.listen(3009, function() {
    console.log('Server listening on', 3009)
});