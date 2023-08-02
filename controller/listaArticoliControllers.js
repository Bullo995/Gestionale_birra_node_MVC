const Categoria = require("../models/listaArticoli");

exports.getAll = async (req, res, next) => {
  try {
    //const [rows] = await Categoria.trovaTutti();
    res.render("listaArticoli"/*, { categorie: rows }*/);
  } catch (error) {
    next(error);
  }
};
