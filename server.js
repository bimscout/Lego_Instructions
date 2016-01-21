var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(require('./auth'));
app.use('/api/themes', require('./controllers/api/themes'));
app.use('/api/products', require('./controllers/api/products'));
app.use('/api/instructions', require('./controllers/api/instructions'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));
app.use(require('./controllers/static'));

app.listen(3009, function() {
    console.log('Server listening on', 3009)
});