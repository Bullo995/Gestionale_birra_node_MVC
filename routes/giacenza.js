const express = require('express');
const router = express.Router();
const Controller = require("../controller/giacenzaController");

router
  .get('/',Controller.getAll);

module.exports = router;