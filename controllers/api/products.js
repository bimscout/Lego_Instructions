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

router.put('/:productid', function (req, res, next) {

    Product.findById(req.params.productid, function(err, product) {
        if (err)
            res.send(err);
        product.themeid = req.body.themeid;
        product.name = req.body.name;
        product.legosetid = req.body.legosetid;
        product.imgUrl = req.body.imgUrl;
        product.description = req.body.description;

        product.save(function(err, product) {
            if(err) {return next(err)}
            res.json(200, product)
        })

    });

});


module.exports = router;