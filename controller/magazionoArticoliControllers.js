const MagazzinoArticoli = require("../models/magazionoArticoli");

exports.getAll = async (req, res, next) => {
  try {
    const [dati] = await MagazzinoArticoli.trovaTutti();
    res.render("magazinoArticoli", { articoliMagazzino: dati });
  } catch (error) {
    next(error);
  }
};

exports.creaArticoloMagazzino = async (req, res, next) => {
  try { 
    const idArticolo = req.body.articolo;
    const quantitaMovimento = req.body.quantitaArticolo;
    const codiceLotto = req.body.lottoArticolo;
    const prezzo = req.body.prezzoArticolo;
    const dataMovimento = req.body.dataMovimentoArticolo;
    const dataScadenza = req.body.dataScadenza;

    

    await MagazzinoArticoli.crea();

  } catch (error) {
    next(error);
  }
};
