var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.redirect("http://localhost:3000/users/signup");
});

module.exports = router;