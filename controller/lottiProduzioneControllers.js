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
    
    const lottoProduzione = new LottoProduzione({
      idProdotto : idProdotto,
      dataProduzione : dataProduzione, 
      dataScadenza : dataScadenza,
      codiceLotto : codiceLotto,
      quantita : quantita
    })

    await lottoProduzione.crea();
    res.redirect("/lottiProduzione");
  } catch (error) {
    next(error);
  }
};

exports.trovaById = async (req,res,next) => {
  try{
    idLotto = req.params.id;

   [lotto, _] = await LottoProduzione.trovaById(idLotto)

   res.status(200).json({dati : lotto});

  }catch (error) {
    next(error);
  }
};

exports.aggiornaLotto = async (req,res,next) =>{
  try{

    const idLotto = req.params.id;
    const idProdotto = req.body.prodottoUpdate;
    const dataProduzione = new Date(req.body.dataProduzioneUpdate);
    const dataScadenza = new Date(req.body.dataScadenzaUpdate);
    const codiceLotto = req.body.codiceLottoUpdate;
    const quantita = req.body.quantitaProdottoUpdate;
    console.log(dataProduzione);         
    await LottoProduzione.update(idLotto, idProdotto, dataProduzione, dataScadenza, codiceLotto, quantita );
  
    res.redirect("/lottiProduzione");
  }catch (error) {
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
  
};
