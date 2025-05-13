var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Rota SignUp, se quiser dar pra acessar a rota de SignIn com o userId, use "users/signin/seunome" e na parte de "seu nome", coloque o nome que quiser.');
});

module.exports = router;