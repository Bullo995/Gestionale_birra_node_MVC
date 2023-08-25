const express = require('express');
const router = express.Router();
const Controller = require("../controller/magazzinoArticoliControllers");

router
  .get('/',Controller.getAll)
  .post("/add",Controller.creaArticoloMagazzino)
  .get("/delete/:id",Controller.cancellaArticoloMagazzino);
  /*
  .get("/edit/:id",Controller)
  .put("/update/:id",Controller)
  */   

module.exports = router;