var db = require('../db');

var Instruction = db.model('Instruction', {
    productid: {type: String, required: true},
    pdfUrl: {type: String, required: true},
    imgUrl: {type: String, required: true},
    booknumber: {type: Number, required: true},
    description: {type: String, required: false}
});

module.exports = Instruction;