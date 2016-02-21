var Instruction = require('../../models/instruction');
var router = require('express').Router();

router.get('/:productid', function (req, res, next) {
    Instruction.where({ productid: req.params.productid }).find()
        .sort('booknumber')
        .exec(function(err, instructions) {
            if(err) {return next(err)}
            res.json(instructions)
        })
});

router.post('/', function (req, res, next) {
    var instruction = new Instruction({
        productid: req.body.productid,
        booknumber: req.body.booknumber,
        pdfUrl: req.body.pdfUrl,
        imgUrl: req.body.imgUrl,
        description: req.body.description
    });
    instruction.save(function(err, instruction) {
        if(err) {return next(err)}
        res.json(201, instruction)
    })
});


router.put('/:instructionid', function (req, res, next) {

    Instruction.findById(req.params.instructionid, function(err, instruction) {
        if (err)
            res.send(err);
        instruction.productid = req.body.productid;
        instruction.booknumber = req.body.booknumber;
        instruction.pdfUrl = req.body.pdfUrl;
        instruction.imgUrl = req.body.imgUrl;
        instruction.description = req.body.description;

        instruction.save(function(err, instruction) {
            if(err) {return next(err)}
            res.json(200, instruction)
        })

    });

});

module.exports = router;