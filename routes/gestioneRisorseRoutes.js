const express = require('express');
const router = express.Router();
const categoriaControllers = require("../controller/categoriaControllers");

router
  .get('/',categoriaControllers.getAllcategorie)
  .post("/add",categoriaControllers.creaNuovaCategoria)
  .get("/edit/:id",categoriaControllers.getCategoriaById)
  .put("/update/:id",categoriaControllers.aggiornaCategoria)
  .delete("/delete/:id",categoriaControllers.cancellaCategoria);  

module.exports = router;