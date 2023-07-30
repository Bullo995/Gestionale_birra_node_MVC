const Categoria = require("../models/Categoria");

exports.getAllcategorie = async (req, res, next) => {
  try {
    const [categoria, _] = await Categoria.trovaTutti();

    res.status(200).json({ count: categoria.length, categoria });
  } catch (error) {
    next(error);
  }
};

exports.creaNuovaCategoria = async (req, res, next) => {
  try {
    let item = req.body.categoria;
    let categoria = new Categoria(item);
    categoria = await categoria.crea();

    res.status(201).json({ message: "Categoria creata" });
  } catch (error) {
    next(error);
  }
};

exports.getCategoriaById = async (req, res, next) => {
  try {
    let categoriaId = req.params.id;

    let [categoria, _] = await Categoria.trovaById(categoriaId);

    res.status(200).json({ post: categoria });
  } catch (error) {
    next(error); 
  }
};
  exports.aggiornaCategoria = async (req, res, next) =>{
    try{
      let categoriaId = req.params.id;
      let {categoria} = req.body;

      await Categoria.update(categoriaId,categoria);

      res.status(200).json({message: "aggiornato con successo" });
    }catch (error) { 
      next(error);
    }
  };

  exports.cancellaCategoria = async (req, res, next) =>{
    try{
      let categoriaId = req.params.id;

      await Categoria.delete(categoriaId);

      res.status(200).json({message: "aggiornato con successo" });
    }catch (error) {
      next(error);
    }
  }