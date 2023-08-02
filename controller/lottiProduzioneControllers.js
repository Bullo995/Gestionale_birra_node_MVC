const Categoria = require("../models/lottiProduzione");

exports.getAll = async (req, res, next) => {
  try {
    //const [rows] = await Categoria.trovaTutti();
    res.render("lottiProduzione"/*, { categorie: rows }*/);
  } catch (error) {
    next(error);
  }
};
