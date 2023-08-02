const express = require('express');
const router = express.Router();
const Controller = require("../controller/anagraficaCFControllers");

router
  .get('/',Controller.getAll);
  /*.post("/add",Controller)
  .get("/edit/:id",Controller)
  .put("/update/:id",Controller)
  .delete("/delete/:id",Controller);  */

module.exports = router;