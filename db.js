var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lego-instructions', function() {
    console.log('mongodb connected')
});

module.exports = mongoose;