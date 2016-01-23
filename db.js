var mongoose = require('mongoose');

var url = process.env.MONGOLAB_URI || 'mongodb://localhost/lego-instructions'
mongoose.connect(url, function() {
    console.log('mongodb connected')
});

module.exports = mongoose;