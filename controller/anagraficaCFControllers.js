const AnagraficaCF = require("../models/anagraficaCF");

exports.getAll = async (req, res, next) => {
  try {
    const [dati] = await AnagraficaCF.trovaTutti();
    res.render("anagraficaClientiFornitori", { anagrafiche: dati });
  } catch (error) {
    next(error);
  }
};

exports.creaNuovoCF = async (req, res, next) => {
  try {
    let ragioneSociale = req.body.ragioneSocialeAdd;
    let indrizzo = req.body.indirizzoAdd;
    let cap = req.body.capAdd;
    let citta = req.body.cittaAdd;
    let siglaProvincia = req.body.siglaProvinciaAdd;
    let partitaIva = req.body.partitaIvaAdd ;
    let numeroTelefono = req.body.numeroTelefonoAdd ;
    let email = req.body.emailAdd;
    let clienteFornitore = req.body.addCF;
    console.log(clienteFornitore);
    if(ragioneSociale !== ""){
      let anagraficaCF = new AnagraficaCF({
        ragioneSociale : ragioneSociale,
        indrizzo : indrizzo,
        cap : cap,
        citta : citta,
        siglaProvincia : siglaProvincia,
        partitaIva : partitaIva,
        numeroTel : numeroTelefono,
        email : email,
        clienteFornitore : clienteFornitore 
      });

      anagraficaCF.crea();

      //aggiungere avviso invio
    }else{
      //aggiungere avviso non invio
      console.log("item vuoto, non inviato");
    }

    //res.status(201).json({ message: "Categoria creata" });
    res.redirect("/anagraficaClientiFornitori");
  } catch (error) {
    next(error);
  }
};

exports.getCFById = async (req, res, next) => {
  try{
    idCF = req.params.id;
   [fornitore, _] = await AnagraficaCF.trovaById(idCF);

   res.status(200).json({ dati: fornitore });
  }catch (error) {
    next(error);
  }
};

exports.aggiornaCF = async (req, res, next) =>{
  try{
    let clienteFornitoreId = req.params.id;
    let ragioneSociale = req.body.ragioneSocialeUpdate;
    let indrizzo = req.body.indirizzoUpdate;
    let cap = req.body.capUpdate;
    let citta = req.body.cittaUpdate;
    let siglaProvincia = req.body.siglaProvinciaUpdate;
    let partitaIva = req.body.partitaIvaUpdate;
    let numeroTel = req.body.numeroTelefonoUpdate;
    let email = req.body.emailUpdate;
    let clienteFornitore = req.body.UpdateCF;

    await AnagraficaCF.update(
      clienteFornitoreId,
      ragioneSociale,
      indrizzo,
      cap,
      citta,
      siglaProvincia,
      partitaIva,
      numeroTel,
      email,
      clienteFornitore
       );
    //res.status(200).json({message: "aggiornato con successo" });
    res.redirect("/anagraficaClientiFornitori");
  }catch (error) { 
    next(error);
  }
};

exports.cancellaClienteFornitore = async (req, res, next) =>{
  try{
    idCF = req.params.id;
    await AnagraficaCF.delete(idCF);

    res.redirect("/anagraficaClientiFornitori");
  }catch (error) {
    next(error);
  }
};
