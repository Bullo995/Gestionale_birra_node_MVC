const LottoProduzione = require("../models/lottiProduzione");

exports.getAll = async (req, res, next) => {
  try {
    const [dati] = await LottoProduzione.trovaTutti();
    res.render("lottiProduzione", { lottiProduzione: dati });
  } catch (error) {
    next(error);
  }
};

exports.creaNuovoLotto = async (req, res, next) => {
  try{
    console.log("test");
    const idProdotto = req.body.prodottoAdd;
    const codiceLotto = req.body.codiceLottoProduzioneAdd;
    const dataProduzione = new Date(req.body.dataProduzioneAdd);
    const dataScadenza = new Date(req.body.dataScadenzaAdd);
    const quantita = req.body.quantitaProdottoAdd;

    console.log("id:"+idProdotto,"lotto:"+codiceLotto,dataProduzione,dataScadenza,quantita)
    const lottoProduzione = new LottoProduzione({
      idProdotto : idProdotto,
      dataProduzione : dataProduzione,
      dataScadenza : dataScadenza,
      codiceLotto : codiceLotto,
      quantita : quantita
    })

    await lottoProduzione.crea();

  } catch (error) {
    next(error);
  }
};

exports.cancellaLotto = async (req, res, next ) => {
  try{
    idLotto = req.params.id;

    await LottoProduzione.delete(idLotto);

    res.redirect("/lottiProduzione");

  } catch (error) {
    next(error);
  }
  
}
