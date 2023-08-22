const Categoria = require("../../models/Categoria");

exports.getAllCategoria = async (req, res, next) =>{
  try{
    const [categorie] = await Categoria.trovaTutti();
    res.status(200).json({ dati: categorie });
  } catch (error) {
    next(error);
  }
};

exports.creaNuovaCategoria = async (req, res, next) => {
  try {
    let item = req.body.categoriaAggiunta;
    if(item !== "" ){
      let categoria = new Categoria(item);
      categoria = await categoria.crea();
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

exports.getCategoriaById = async (req, res, next) => {
  try {

    let categoriaId = req.params.id;

    let [categoria, _] = await Categoria.trovaById(categoriaId);
    
    res.status(200).json({ dati: categoria });

  } catch (error) {
    next(error); 
  }
};
  exports.aggiornaCategoria = async (req, res, next) =>{
    try{
      let categoriaId = req.params.id;
      let categoria = req.body.contenuto;
      
      await Categoria.update(categoriaId, categoria);
      //res.status(200).json({message: "aggiornato con successo" });
      res.redirect("/gestioneRisorse");
    }catch (error) { 
      next(error);
    }
  };

  exports.cancellaCategoria = async (req, res, next) =>{
    try{
      let categoriaId = req.params.id;
      await Categoria.delete(categoriaId);

      //res.status(200).json({message: "aggiornato con successo" });
      res.redirect("/gestioneRisorse");
    }catch (error) {
      next(error);
    }
  }