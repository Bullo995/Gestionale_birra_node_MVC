const express = require('express');
const router = express.Router();
const Controller = require("../controller/lottiProduzioneControllers");

router
  .get('/',Controller.getAll)
  .post("/add",Controller.creaNuovoLotto)/*
  .get("/edit/:id",Controller)
  .put("/update/:id",Controller)*/
  .get("/delete/:id",Controller.cancellaLotto);   

module.exports = router;