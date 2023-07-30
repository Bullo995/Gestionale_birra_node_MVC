const express = require('express');
const router = express.Router();
const postControllers = require("../controller/categoriaControllers");

router
  .get("/get",postControllers.getAllcategorie)
  .post("/post",postControllers.creaNuovaCategoria)
  .get("/edit/:id",postControllers.getCategoriaById) 
  .put("/update/:id",postControllers.aggiornaCategoria)
  .delete("/delete/:id",postControllers.cancellaCategoria);  

module.exports = router;