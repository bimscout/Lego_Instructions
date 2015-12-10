var Theme = require('../../models/theme');
var router = require('express').Router();

router.get('/', function (req, res, next) {
    Theme.find()
        .sort('name')
        .exec(function(err, themes) {
            if(err) {return next(err)}
            res.json(themes)
        })
});

router.post('/', function (req, res, next) {
    var theme = new Theme({
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        setCount: req.body.setCount
    });
    theme.save(function(err, theme) {
        if(err) {return next(err)}
        res.json(201, theme)
    })
});

module.exports = router;