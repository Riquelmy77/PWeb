var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const quote = response.data[0];
    res.render('index', { title: 'Mensagem do Dia', quote });
  } catch (error) {
    res.render('index', { title: 'Mensagem do Dia', quote: 'Não foi possível obter a mensagem.' });
  }
});

module.exports = router;
