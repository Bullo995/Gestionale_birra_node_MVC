const Causali = require("../../models/causali");

exports.creaNuovaCausale = async (req, res, next) => {
  try {
    let item = req.body.causaleAggiunta;
    if(item !== "" ){
      let causale = new Causali(item);
      await causale.crea();
      //aggiungere avviso invio
    }else{
      //aggiungere avviso non invio
      console.log("item vuoto, non inviato");
    }

    //res.status(201).json({ message: "Categoria creata" });
    res.redirect("/gestioneRisorse");
  } catch (error) {
    next(error);
  }
};

exports.getCausaleById = async (req, res, next) => {
  try {

    let causaleId = req.params.id;

    let [causale, _] = await Causali.trovaById(causaleId);
    
    res.status(200).json({ dati: causale });

  } catch (error) {
    next(error); 
  }
};
  exports.aggiornaCausale = async (req, res, next) =>{
    try{
      let causaleId = req.params.id;
      let causale = req.body.contenuto;
      
      await Causali.update(causaleId, causale);
      //res.status(200).json({message: "aggiornato con successo" });
      res.redirect("/gestioneRisorse");
    }catch (error) { 
      next(error);
    }
  };

  exports.cancellaCausale = async (req, res, next) =>{
    try{
      let causaleId = req.params.id;
      await Causali.delete(causaleId);

      //res.status(200).json({message: "aggiornato con successo" });
      res.redirect("/gestioneRisorse");
    }catch (error) {
      next(error);
    }
  }