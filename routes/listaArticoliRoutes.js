const express = require('express');
const router = express.Router();
const Controller = require("../controller/listaArticoliControllers");

router
  .get('/',Controller.getAll)
  .post("/add",Controller.creaNuovoArticolo)
  .get("/articolo/:idSottocat", Controller.getArticoloBySottocat)
  .get("/delete/:id",Controller.cancellaArticolo)
  .get("/edit/:id",Controller.getArticoloById)
  .post("/update/:id",Controller.aggiornaArticolo);

module.exports = router;