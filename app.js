const express = require('express');
const app = express();
const path = require('path');
const page =  require('./routes/page');
const port = 3000;




app.use(express.urlencoded({ extended: false }));


app.use('/', express.static(path.join(__dirname, '/public')));


app.use('/', page);
app.use('/listaArticoli', page);
app.use('/anagraficaClientiFornitori', page);
app.use('/gestioneRisorse', page);
app.use('/listaProdotti', page);
app.use('/lottiProduzione', page);

app.set('view engine', 'ejs');



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

