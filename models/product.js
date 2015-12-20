var db = require('../db');

var Product = db.model('Product', {
    themeid: {type: String, required: true},
    name: {type: String, required: true},
    legosetid: {type: String, required: true},
    imgUrl: {type: String, required: true},
    description: {type: String, required: false}
});

module.exports = Product;
