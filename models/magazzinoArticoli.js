const db = require("../config/db");

class MagazzinoArticoli{

    constructor(config){
        this.idArticolo = config.idArticolo;
        this.dataMovimento = new data(config.dataMovimento);
        this.quantitaMovimento = config.quantitaMovimento;
        this.prezzo = config.prezzo || null ;
        this.codiceLotto = config.codiceLotto || null;
        this.dataScadenza = new data (config.dataScadenza) || null;
        this.idFornitore = config.idFornitore;
    }

    crea(){

        let sql = `
        INSERT INTO magazzino_articoli(
            id_articolo,
            data_movimento,
            quantita_movimento,
            prezzo_articolo,
            codice_lotto_articolo,
            data_scadenza,
            id_fornitore
        )VALUES(?,?,?,?,?,?,?)
        `;
        return db.execute(
            sql,
            [
                this.idArticolo,
                this.dataMovimento,
                this.quantitaMovimento,
                this.prezzo,
                this.codiceLotto,
                this.dataScadenza,
                this.idFornitore
            ]);
    }

    static trovaTutti(){
        let sql = ` 
        SELECT * FROM v_cbo_articoli_magazzino
        ;`;

        return db.execute(sql);
    }


}

module.exports = MagazzinoArticoli;