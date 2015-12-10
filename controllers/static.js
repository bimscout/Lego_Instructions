var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../assets/images/themes'));
router.use(express.static(__dirname + '/../components/root'));
router.use(express.static(__dirname + '/../components/themeList'));
router.use(express.static(__dirname + '/../components/topNav'));

router.get('/', function (req, res) {
    res.sendfile('index.html')
});

module.exports = router;