const express = require('express');
const router = express.Router();
const page = require("../controller/gestioneRisorse/index");
const categoriaControllers = require("../controller/gestioneRisorse/categoriaControllers");
const CausaleControllers = require("../controller/gestioneRisorse/causaliControllers");
router
  .get('/',page.render)
  .post("/CategoriaAdd",categoriaControllers.creaNuovaCategoria)
  .get("/CategoriaEdit/:id",categoriaControllers.getCategoriaById)
  .post("/CategoriaUpdate/:id",categoriaControllers.aggiornaCategoria)
  .get("/CategoriaDelete/:id",categoriaControllers.cancellaCategoria)
  .post("/CausaleAdd",CausaleControllers.creaNuovaCausale)
  .get("/CausaleEdit/:id",CausaleControllers.getCausaleById)
  .post("/CausaleUpdate/:id",CausaleControllers.aggiornaCausale)
  .get("/CausaleDelete/:id",CausaleControllers.cancellaCausale);   

module.exports = router; 