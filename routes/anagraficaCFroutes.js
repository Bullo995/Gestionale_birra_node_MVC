const express = require('express');
const router = express.Router();
const Controller = require("../controller/anagraficaCFControllers");

router
  .get('/',Controller.getAll)
  .post("/add",Controller.creaNuovoCF)
  .get("/delete/:id",Controller.cancellaClienteFornitore)
  .get("/edit/:id",Controller.getCFById);
  //.put("/update/:id",Controller);  

module.exports = router;