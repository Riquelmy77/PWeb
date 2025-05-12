const express = require('express');
const app = express();
exports.app = app;
const port = 3000;

app.use((req, res, next) => {
    console.log(`Acesso à rota: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Index');
});

app.get('/about', (req, res) => {
    res.send('About');
});
app.post('/data', (req, res) => {
    res.send('Data');
});

app.get('/users', (req, res) => {
    res.redirect('/signup');
});

app.get('/signin', (req, res) => {
    res.send('Sign In');
});

app.get('/users/:userid', (req, res) => {
    const { userid } = req.params;
    res.send('Bem vindo, contemplado' + ` ${userid}`);
});

app.get('/signup', (req, res) => {
    res.send('Sign Up');
});

app.use((req, res) => {
  res.status(404).send(`
    <h1>Erro 404 - Página não encontrada</h1>
    <a href="/">Voltar pro começo</a>
  `);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
