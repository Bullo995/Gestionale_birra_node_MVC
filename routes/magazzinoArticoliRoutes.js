const express = require('express');
const router = express.Router();
const Controller = require("../controller/magazzinoArticoliControllers");

router
  .get('/',Controller.getAll)
  .post("/add",Controller.creaArticoloMagazzino)
  .get("/delete/:id",Controller.cancellaArticoloMagazzino)
  .get("/edit/:id",Controller.getArticoloById)
  .post("/update/:id",Controller.aggiornaArticoloMagazzino);
     

module.exports = router;