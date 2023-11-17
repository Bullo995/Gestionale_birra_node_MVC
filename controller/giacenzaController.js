const Giacenza = require("../models/Giacenza.js");

exports.getAll = async (req, res, next) => {
  try {
    const [giacenzaArticoli] = await Giacenza.articoli();
    const [giacenzaProdotti] = await Giacenza.prodotti(); 
    const [giacenzaArticoliLotto] = await Giacenza.articoliLotto();
    const [giacenzaProdottiLotto] = await Giacenza.prodottiLotto();
    res.render("giacenza",{
      totArticoli:giacenzaArticoli,
      totProdotti:giacenzaProdotti,
      lottoArticoli:giacenzaArticoliLotto,
      lottoProdotti:giacenzaProdottiLotto
    });
  } catch (error) {
    next(error);
  }
};