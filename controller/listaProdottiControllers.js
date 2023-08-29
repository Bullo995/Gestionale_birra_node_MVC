const Prodotto = require("../models/listaProdotti");

exports.getAll = async (req, res, next) => {
  try {
    const [dati] = await Prodotto.trovaTutti();
    res.render("listaProdotti", { prodotti: dati });
  } catch (error) {
    next(error);
  }
};

exports.prodotti = async (req, res, next) =>{
  try {
    const [prodotti] = await Prodotto.trovaTutti();
    res.status(200).json({ dati: prodotti });
  } catch (error) {
    next(error);
  }
}

exports.creaNuovoProdotto = async (req, res, next) => {
  try {
    let nome = req.body.nomeAdd;
    let prezzo = req.body.prezzoAdd;
    let descrizione = req.body.descrizioneAdd;
    let capacita = req.body.capacitaAdd;
    let idUnitaM = req.body.unitaMisuraAdd;

    if(nome !== "" ){
      let prodotto = new Prodotto({
        Prodotto : nome,
        capacita : capacita,
        idUnitaMisura : idUnitaM,
        prezzo : prezzo,
        descrizione : descrizione
      });
      await prodotto.crea();
      //aggiungere avviso invio
    }else{
      //aggiungere avviso non invio
      console.log("item vuoto, non inviato");
    }

    //res.status(201).json({ message: "Categoria creata" });
    res.redirect("/listaProdotti");
  } catch (error) {
    next(error);
  }
};

exports.getProdottoById = async (req, res, next) => {
  try{
    const idProdotto = req.params.id;
    const [prodotto, _] = await Prodotto.trovaById(idProdotto);

    res.status(200).json({ dati: prodotto });

  }catch (error) {
    next(error);
  }
}

exports.aggiornaProdotto = async (req, res, next) => {
  try{
    const Id = req.params.id;
    const nome = req.body.nomeUpdate;
    const capacita = req.body.capacitaUpdate;
    const idUnitaMisura = req.body.unitaMisuraUpdate;
    const descrizione = req.body.descrizioneUpdate;
    const prezzo = req.body.prezzoUpdate;

    await Prodotto.update(Id,nome,descrizione,capacita,idUnitaMisura,prezzo);

    res.redirect("/listaProdotti");
  }catch (error) {
    next(error);
  }
}

exports.cancellaArticolo = async (req,res,next) =>{
  try{
    let prodottoId = req.params.id;

    await Prodotto.delete(prodottoId);

    res.redirect("/listaProdotti");
  }catch (error) {
    next(error);
  }
}