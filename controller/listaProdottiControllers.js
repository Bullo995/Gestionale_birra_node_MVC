const Categoria = require("../models/listaProdotti");

exports.getAll = async (req, res, next) => {
  try {
    //const [rows] = await Categoria.trovaTutti();
    res.render("listaProdotti"/*, { categorie: rows }*/);
  } catch (error) {
    next(error);
  }
};
