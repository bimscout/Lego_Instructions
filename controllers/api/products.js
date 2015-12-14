var Product = require('../../models/product');
var router = require('express').Router();

router.get('/:themeid', function (req, res, next) {
    Product.where({ themeid: req.params.themeid }).find()
        .sort('name')
        .exec(function(err, products) {
            if(err) {return next(err)}
            res.json(products)
        })
});

router.post('/', function (req, res, next) {
    var product = new Product({
        themeid: req.body.themeid,
        name: req.body.name,
        legosetid: req.body.legosetid,
        imgUrl: req.body.imgUrl,
        description: req.body.description
    });
    product.save(function(err, product) {
        if(err) {return next(err)}
        res.json(201, product)
    })
});

module.exports = router;