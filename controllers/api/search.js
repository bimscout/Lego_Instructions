var Product = require('../../models/product');
var router = require('express').Router();

router.get('', function (req, res, next) {
console.log(req.query.q);
    Product.find({name: { "$regex": req.query.q, "$options": "i" }})
        .sort('name')
        .exec(function(err, products) {
            if(err) {return next(err)}
            res.json(products)
        })
});

module.exports = router;