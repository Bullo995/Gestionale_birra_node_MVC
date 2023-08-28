const Prodotto = require("../models/listaProdotti");

exports.getAll = async (req, res, next) => {
  try {
    const [dati] = await Prodotto.trovaTutti();
    res.render("listaProdotti", { prodotti: dati });
  } catch (error) {
    next(error);
  }
};
