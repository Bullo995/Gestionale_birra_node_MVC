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
exports.getArticoloById = async (req, res, next) => {

  let idArticoloMagazzino = req.params.id;

  let [articolo, _] = await MagazzinoArticoli.trovaById(idArticoloMagazzino);
  console.log(articolo);

  res.status(200).json({dati : articolo});

};

exports.aggiornaArticoloMagazzino = async (req, res, next) => {
  try{
    const idArticoloMagazzino = req.params.id;
    const idArticolo = req.body.articoloUpdate;
    const dataMovimento = new Date(req.body.dataMovimentoArticoloUpdate); 
    const quantitaMovimento = req.body.quantitaArticoloUpdate; 
    const prezzoArticolo = req.body.prezzoArticoloUpdate || null;
    const lottoArticolo = req.body.lottoArticoloUpdate || null;
    const dataScadenza = req.body.dataScadenzaArticoloUpdate != "" ? new Date (req.body.dataScadenzaArticoloUpdate) : null ;
    const idFornitoreCliente = req.body.fornitoreArticoloUpdate;

    console.log(idArticoloMagazzino,idArticolo,dataMovimento,quantitaMovimento,prezzoArticolo,lottoArticolo,dataScadenza,idFornitoreCliente)
    //controlli da insererire

    await MagazzinoArticoli.update(
    idArticoloMagazzino,
    idArticolo,
    dataMovimento,
    quantitaMovimento,
    prezzoArticolo,
    lottoArticolo,
    dataScadenza,
    idFornitoreCliente
    );
    res.redirect("/"); 
  }catch (error) {
    next(error);
  }
  
}


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
