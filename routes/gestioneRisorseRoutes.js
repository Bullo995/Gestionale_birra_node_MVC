const express = require('express');
const router = express.Router();
const page = require("../controller/gestioneRisorse/index");
const categoriaControllers = require("../controller/gestioneRisorse/categoriaControllers");

router
  .get('/',page.render)
  .post("/add",categoriaControllers.creaNuovaCategoria)
  .get("/edit/:id",categoriaControllers.getCategoriaById)
  .put("/update/:id",categoriaControllers.aggiornaCategoria)
  .delete("/deleteCategoria/:id",categoriaControllers.cancellaCategoria);  

module.exports = router;