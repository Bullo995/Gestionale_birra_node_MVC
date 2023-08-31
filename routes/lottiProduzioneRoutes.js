const express = require('express');
const router = express.Router();
const Controller = require("../controller/lottiProduzioneControllers");

router
  .get('/',Controller.getAll)
  .post("/add",Controller.creaNuovoLotto)
  .get("/edit/:id",Controller.trovaById)
  .post("/update/:id",Controller.aggiornaLotto)
  .get("/delete/:id",Controller.cancellaLotto);   

module.exports = router;