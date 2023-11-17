const express = require('express');
const app = express();


const gestioneRisorseRoute = require('./routes/gestioneRisorseRoutes');
const anagraficaCFroute = require('./routes/anagraficaCFroutes');
const listaArticoliRoute = require('./routes/listaArticoliRoutes');
const listaProdottiRoute = require('./routes/listaProdottiRoutes');
const lottiProduzioneRoute = require('./routes/lottiProduzioneRoutes');
const magazzinoArticoliRoute = require('./routes/magazzinoArticoliRoutes');
const giacenzaRoute = require(`./routes/giacenza`);

const port = 8000;

const path = require('path');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', magazzinoArticoliRoute);
app.use('/listaArticoli', listaArticoliRoute);
app.use('/anagraficaClientiFornitori', anagraficaCFroute); 
app.use('/gestioneRisorse', gestioneRisorseRoute);
app.use('/listaProdotti', listaProdottiRoute);
app.use('/lottiProduzione', lottiProduzioneRoute);
app.use('/giacenza', giacenzaRoute);


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
  console.log(`App listening on port ${port}`)
})
