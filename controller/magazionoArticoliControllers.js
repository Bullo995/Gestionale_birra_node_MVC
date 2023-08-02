const Categoria = require("../models/magazionoArticoli");

exports.getAll = async (req, res, next) => {
  try {
    //const [rows] = await Categoria.trovaTutti();
    res.render("magazinoArticoli"/*, { categorie: rows }*/);
  } catch (error) {
    next(error);
  }
};
