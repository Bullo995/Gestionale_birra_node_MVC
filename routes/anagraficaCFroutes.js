const express = require('express');
const router = express.Router();
const Controller = require("../controller/anagraficaCFControllers");

router
  .get('/',Controller.getAll)
  .get('/lista',Controller.getlista)
  .post("/add",Controller.creaNuovoCF)
  .get("/delete/:id",Controller.cancellaClienteFornitore)
  .get("/edit/:id",Controller.getCFById)
  .post("/update/:id",Controller.aggiornaCF);  

module.exports = router;