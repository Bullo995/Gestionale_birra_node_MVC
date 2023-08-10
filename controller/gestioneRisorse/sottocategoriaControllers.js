const Sottocategoria = require("../../models/sottocategoria");

exports.creaNuovaSottocategoria = async (req, res, next) => {
    try {
      let item = req.body.sottocategoriaAggiunta;
      let idCat = req.body.CatSottocategoriaAdd;
      if(item !== "" && idCat !== "" ){
        let sottocategoria = new Sottocategoria(item, idCat);
        
        await sottocategoria.crea();
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
exports.getSottocategoriaByCat = async (req, res, next) => {
    try {
        
      let categoriaId = req.params.id;
      let [sottocategoria, _] = await Sottocategoria.trovaByCategoria(categoriaId);
      
      res.status(200).json({ dati: sottocategoria });
  
    } catch (error) {
      next(error); 
    }
  };

  exports.getSottocategoriaById = async (req, res, next) => {
    try {
  
      let sottocategoriaId = req.params.id;
  
      let [sottocategoria, _] = await Sottocategoria.trovaById(sottocategoriaId);
      
      res.status(200).json({ dati: sottocategoria });
  
    } catch (error) {
      next(error); 
    }
  };
    exports.aggiornaSottocategoria = async (req, res, next) =>{
      try{
        let sottocategoriaId = req.params.id;
        let sottocategoria = req.body.contenuto;
        let categoriaId = req.body.categoriaModSotto;
        
        await Sottocategoria.update(sottocategoriaId, sottocategoria, categoriaId);
        //res.status(200).json({message: "aggiornato con successo" });
        res.redirect("/gestioneRisorse");
      }catch (error) { 
        next(error);
      }
    };
  

  exports.cancellaSottocategoria = async (req, res, next) =>{
    try{
      let sottocategoriaId = req.params.id;
      await Sottocategoria.delete(sottocategoriaId);

      //res.status(200).json({message: "aggiornato con successo" });
      res.redirect("/gestioneRisorse");
    }catch (error) {
      next(error);
    }
  };