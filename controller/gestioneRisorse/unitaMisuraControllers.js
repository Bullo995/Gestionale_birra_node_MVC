const UnitaM = require("../../models/unitaMisura");

exports.creaNuovaUnitaMisura = async (req, res, next) => {
  try {
    let item = req.body.unitaMisuraAggiunta;
    if(item !== "" ){
      let unita = new UnitaM(item);
      await unita.crea();
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

exports.getUnitaMisuraById = async (req, res, next) => {
  try {

    let unitaId = req.params.id;

    let [unita, _] = await UnitaM.trovaById(unitaId);
    
    res.status(200).json({ dati: unita });

  } catch (error) {
    next(error); 
  }
};
  exports.aggiornaUnitaMisura = async (req, res, next) =>{
    try{
      let unitaId = req.params.id;
      let unita = req.body.contenuto;
      
      await UnitaM.update(unitaId, unita);
      //res.status(200).json({message: "aggiornato con successo" });
      res.redirect("/gestioneRisorse");
    }catch (error) { 
      next(error);
    }
  };

  exports.cancellaUnitaMisura = async (req, res, next) =>{
    try{
      let unitaId = req.params.id;
      await UnitaM.delete(unitaId);

      //res.status(200).json({message: "aggiornato con successo" });
      res.redirect("/gestioneRisorse");
    }catch (error) {
      next(error);
    }
  }