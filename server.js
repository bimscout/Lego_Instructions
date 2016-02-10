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
app.use('/api/search', require('./controllers/api/search'));
app.use(require('./controllers/static'));

var port = process.env.PORT || 3009;
app.listen(port, function() {
    console.log('Server ', process.pid, ' listening on', port)
});