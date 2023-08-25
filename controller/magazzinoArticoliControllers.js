const MagazzinoArticoli = require("../models/magazzinoArticoli");

exports.getAll = async (req, res, next) => {
  try {
    const [dati] = await MagazzinoArticoli.trovaTutti();
    res.render("magazzinoArticoli", { articoliMagazzino: dati });
  } catch (error) {
    next(error);
  }
};

exports.creaArticoloMagazzino = async (req, res, next) => {
  try { 

    const idArticolo = req.body.articoloAdd;
    let dataMovimento = new Date(req.body.dataMovimentoArticoloAdd);
    const quantitaMovimento = req.body.quantitaArticoloAdd;
    const prezzo = req.body.prezzoArticoloAdd == "" ? null : req.body.prezzoArticoloAdd;
    const codiceLotto = req.body.lottoArticoloAdd == "" ? null : req.body.lottoArticoloAdd;
    const dataScadenza = req.body.dataScadenzaArticoloAdd == "" ? null : new Date(req.body.dataScadenzaArticoloAdd);
    const idFornitore = req.body.fornitoreArticoloAdd;

    let articolo = new MagazzinoArticoli({
      idArticolo : idArticolo,
      dataMovimento: dataMovimento,
      quantitaMovimento : quantitaMovimento,
      prezzo : prezzo,
      codiceLotto : codiceLotto,
      dataScadenza : dataScadenza,
      idFornitore : idFornitore
    });
    await articolo.crea();

    res.redirect("/");

  } catch (error) {
    next(error);
  }
};

exports.cancellaArticoloMagazzino = async (req,res,next) =>{
  try{
    
    let articoloId = req.params.id;

    await MagazzinoArticoli.delete(articoloId);

    //res.status(200).json({message: "aggiornato con successo" });
    res.redirect("/");
  }catch (error) {
    next(error);
  }
};
