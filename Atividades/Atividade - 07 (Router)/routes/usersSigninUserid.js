var express = require('express');
var router = express.Router({ mergeParams: true });

/* GET users listing. */
router.get('/', function(req, res, ) {
    res.send(`Bem-vindo, contemplado ${req.params.userid}!`);
});

module.exports = router;