const express = require('express');
const app = express();
const path = require('path');
const page = require('./routes/pageRoutes');
const crud = require('./routes/postRoutes');
const port = 3000;




app.use(express.urlencoded({ extended: false }));


app.use('/', express.static(path.join(__dirname, '/public')));

app.use(express.json());



app.use('/', page, crud);
app.use('/listaArticoli', page);
app.use('/anagraficaClientiFornitori', page);
app.use('/gestioneRisorse', page);
app.use('/listaProdotti', page);
app.use('/lottiProduzione', page);

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
/*

app.get('/prova', function(req, res){
  const query = 'SELECT * FROM anagrafiche_articoli';

  conn.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).send('Error fetching users from the database.');
      return;
    }
    //res.json(results);
    //res.send('/prova'));
    //const id = results.map((row)=>row.id_articolo);
    //const nomeArticolo = results.map((row)=>row.nome_articolo);
    //res.json(id);
   // res.json(nomeArticolo);
  });
});

*/

