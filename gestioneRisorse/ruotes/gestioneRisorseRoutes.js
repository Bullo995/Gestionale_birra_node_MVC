const express = require('express');
const router = express.Router();
const page = require("../controller/gestioneRisorse/index");
const categoriaControllers = require("../controller/gestioneRisorse/categoriaControllers");
const sottocategoriaControllers = require("../controller/gestioneRisorse/sottocategoriaControllers");
const unitaMisuraControllers = require("../controller/gestioneRisorse/unitaMisuraControllers");
const causaleControllers = require("../controller/gestioneRisorse/causaliControllers");
router
  .get('/',page.render)

  .get("/CategoriaAll",categoriaControllers.getAllCategoria)
  .post("/CategoriaAdd",categoriaControllers.creaNuovaCategoria)
  .get("/CategoriaEdit/:id",categoriaControllers.getCategoriaById)
  .post("/CategoriaUpdate/:id",categoriaControllers.aggiornaCategoria)
  .get("/CategoriaDelete/:id",categoriaControllers.cancellaCategoria)

  .post("/SottocategoriaAdd",sottocategoriaControllers.creaNuovaSottocategoria)
  .get("/sottocatByCat/:id",sottocategoriaControllers.getSottocategoriaByCat)
  .get("/SottocategoriaEdit/:id",sottocategoriaControllers.getSottocategoriaById)
  .post("/SottocategoriaUpdate/:id",sottocategoriaControllers.aggiornaSottocategoria)
  .get("/SottocategoriaDelete/:id",sottocategoriaControllers.cancellaSottocategoria)

  .get("/UnitaAll",unitaMisuraControllers.getAllUnitaMisura)
  .post("/UnitaAdd",unitaMisuraControllers.creaNuovaUnitaMisura)
  .get("/UnitaEdit/:id",unitaMisuraControllers.getUnitaMisuraById)
  .post("/UnitaUpdate/:id",unitaMisuraControllers.aggiornaUnitaMisura)
  .get("/UnitaDelete/:id",unitaMisuraControllers.cancellaUnitaMisura)

  .post("/CausaleAdd",causaleControllers.creaNuovaCausale)
  .get("/CausaleEdit/:id",causaleControllers.getCausaleById)
  .post("/CausaleUpdate/:id",causaleControllers.aggiornaCausale)
  .get("/CausaleDelete/:id",causaleControllers.cancellaCausale);   

module.exports = router; 