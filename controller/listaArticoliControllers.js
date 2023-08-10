const Articoli = require("../models/listaArticoli");

exports.getAll = async (req, res, next) => {
  try {
    const [dati] = await Articoli.trovaTutti();
    //res.status(200).json({ dati: articoli });

    res.render("listaArticoli", { articoli: dati });

  } catch (error) {
    next(error);
  }
};

exports.creaNuovoArticolo = async (req, res, next) => {
  try {
    let idSottocategoria = req.body.articoloAddSottoCat;
    let nome = req.body.articoloAddNome;
    let descrizione = req.body.articoloAddDescrizione;
    let capacita = req.body.articoloAddCapacita;
    let idUnitaM = req.body.articoloAddUnita;

    if(idSottocategoria !== "" && nome !== ""){
      let articolo = new Articoli({
        sottocategoriaId : idSottocategoria,
        articoloNome : nome,
        descrizione : descrizione,
        capacita : capacita,
        unitaId : idUnitaM
      });
      await articolo.crea();
      //aggiungere avviso invio
    }else{
      //aggiungere avviso non invio
      console.log("item vuoto, non inviato");
    }

    //res.status(201).json({ message: "Categoria creata" });
    res.redirect("/listaArticoli");
  } catch (error) {
    next(error);
  }
};

exports.getArticoloById = async (req, res, next) => {
  try {

    let articoloId = req.params.id;

    let [articolo, _] = await Articoli.trovaById(articoloId);
    
    res.status(200).json({ dati: articolo });

  } catch (error) {
    next(error); 
  }
};
  exports.aggiornaArticolo = async (req, res, next) =>{
    try{
      let articoloId = req.params.id;
      let sottocategoriaId = req.body.sottocategoriaId;
      let articolo = req.body.nomeArticolo;
      let descrizione = req.body.descrizioneArticolo;
      let capacita = req.body.capacitaArticolo;
      let unitaId = req.body.unitaArticolo;

      await Articoli.update(articoloId,sottocategoriaId,articolo,descrizione,capacita,unitaId);
      //res.status(200).json({message: "aggiornato con successo" });
      res.redirect("/listaArticoli");
    }catch (error) { 
      next(error);
    }
  };

exports.cancellaArticolo = async (req,res,next) =>{
  try{
    let articoloId = req.params.id;
    await Articoli.delete(articoloId);

    //res.status(200).json({message: "aggiornato con successo" });
    res.redirect("/listaArticoli");
  }catch (error) {
    next(error);
  }
};