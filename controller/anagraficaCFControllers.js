const Categoria = require("../models/anagraficaCF");

exports.getAll = async (req, res, next) => {
  try {
    //const [rows] = await Categoria.trovaTutti();
    res.render("anagraficaClientiFornitori"/*, { categorie: rows }*/);
  } catch (error) {
    next(error);
  }
};
