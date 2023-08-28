const express = require('express');
const router = express.Router();
const Controller = require("../controller/listaProdottiControllers");

router
  .get('/',Controller.getAll)
  .post("/add",Controller.creaNuovoProdotto)
  .get("/edit/:id",Controller.getProdottoById)
  .post("/update/:id",Controller.aggiornaProdotto)
  .get("/delete/:id",Controller.cancellaArticolo);   

module.exports = router;