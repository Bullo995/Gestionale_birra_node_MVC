const express = require('express');
const router = express.Router();
const postControllers = require("../controller/categoriaControllers");

router
  .get('/gestioneRisorse',postControllers.getAllcategorie)
  .post("/add",postControllers.creaNuovaCategoria)
  .get("/edit/:id",postControllers.getCategoriaById)
  .put("/update/:id",postControllers.aggiornaCategoria)
  .delete("/delete/:id",postControllers.cancellaCategoria);  

module.exports = router;