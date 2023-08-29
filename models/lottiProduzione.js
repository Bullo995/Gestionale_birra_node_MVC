const db = require("../config/db");

class LottoProduzione {
    constructor(config){
        this.idProdotto = config.idProdotto;
        this.dataProduzione = config.dataProduzione;
        this.dataScadenza = config.dataScadenza;
        this.codiceLotto = config.codiceLotto;
        this.quantita = config.quantita;
    }

    crea() {
        let sql = `
        INSERT INTO lotti_produzione(
            id_prodotto,
            data_produzione,
            data_scadenza,
            codice_lotto,
            quantita
        )VALUES(?,?,?,?,?);
        `;

        return db.execute(
            sql,
            [
                this.idProdotto,
                this.dataProduzione,
                this.dataScadenza,
                this.codiceLotto,
                this.quantita
            ]);
    }

    static trovaTutti(){
        
        let sql = `
        SELECT lp.*, ap.nome_prodotto 
        FROM lotti_produzione AS lp
        JOIN anagrafiche_prodotti AS ap 
        ON lp.id_prodotto = ap.id_prodotto 
        ;`;

        return db.execute(sql);
    }

    static delete(id){

        let sql = `
        DELETE FROM lotti_produzione
        WHERE id_lotto_produzione = ?;
        `;
        return db.execute(sql,[id]);
    }
}

module.exports = LottoProduzione;