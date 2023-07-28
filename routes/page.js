const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/listaArticoli', function(req, res){
    res.render('listaArticoli');
});

router.get('/anagraficaClientiFornitori', function(req, res){
    res.render('anagraficaClientiFornitori');
});

router.get('/gestioneRisorse', function(req, res){
    res.render('gestioneRisorse');
});

router.get('/listaProdotti', function(req, res){
    res.render('listaProdotti');
});

router.get('/lottiProduzione', function(req, res){
    res.render('lottiProduzione');
});

module.exports = router;