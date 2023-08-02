const Categoria = require("../../models/Categoria");
const Sottocategoria = require("../../models/sottocategoria");
const UnitaMisura = require("../../models/unitaMisura");
const Causali = require("../../models/causali");



exports.render = async (req, res, next) => {
    try {
      const [categorie] = await Categoria.trovaTutti();
      const [sottocategorie] = await Sottocategoria.trovaTutti();
      const [unitaMisura] = await UnitaMisura.trovaTutti();
      const [causali] = await Causali.trovaTutti();

      res.render("gestioneRisorse", { 
         categorie: categorie,
         sottocategorie:sottocategorie,
         unitaMisura:unitaMisura,
         causali:causali 
        });

    } catch (error) {
      next(error);
    }
  };