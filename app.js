const express = require('express');
const app = express();


const gestioneRisorseRoute = require('./routes/gestioneRisorseRoutes');
const anagraficaCFroute = require('./routes/anagraficaCFroutes');
const listaArticoliRoute = require('./routes/listaArticoliRoutes');
const listaProdottiRoute = require('./routes/listaProdottiRoutes');
const lottiProduzioneRoute = require('./routes/lottiProduzioneRoutes');
const magazionoArticoliRoute = require('./routes/magazionoArticoliRoutes');

const port = 3000;

const path = require('path');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', magazionoArticoliRoute);
app.use('/listaArticoli', listaArticoliRoute);
app.use('/anagraficaClientiFornitori', anagraficaCFroute); 
app.use('/gestioneRisorse', gestioneRisorseRoute);
app.use('/listaProdotti', listaProdottiRoute);
app.use('/lottiProduzione', lottiProduzioneRoute);

app.set('view engine', 'ejs');


app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
