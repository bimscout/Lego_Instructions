var db = require('../db');

var Theme = db.model('Theme', {
    name: {type: String, required: true},
    imgUrl: {type: String, required: true},
    setCount: {type: Number, required: true}
});

module.exports = Theme;