const db = require("../config/db");

class Prodotto{

    constructor(config){
        this.Prodotto = config.Prodotto;
        this.capacita = config.capacita;
        this.idUnitaMisura = config.idUnitaMisura;
        this.prezzo = config.prezzo;
        this.descrizione = config.descrizione || null;
    }

    crea(){

        let sql = `
            INSERT INTO anagrafiche_prodotti(
                nome_prodotto,
                descrizione_prodotto,
                capacita,
                id_unita_misura,
                prezzo_listino
            )VALUES(?,?,?,?,?);
        `;
        return db.execute(
            sql,
            [
                this.Prodotto,
                this.descrizione,
                this.capacita,
                this.idUnitaMisura,
                this.prezzo
            ]
            )
    }

    static trovaTutti(){
        let sql = `
            SELECT ap.*, um.unita_misura
            FROM anagrafiche_prodotti AS ap
            JOIN unita_misura AS um
            ON ap.id_unita_misura = um.id_unita_misura;
        `;
        return db.execute(sql);
    }

    static delete(id){
        let sql = `
        DELETE FROM anagrafiche_prodotti
        WHERE id_prodotto = ?;
        `;

        return db.execute(sql, [id]);
    }

    static trovaById(id){
        let sql = `
        SELECT * FROM anagrafiche_prodotti
        WHERE id_prodotto = ?;
        `;
        return db.execute(sql,[id]);
    }    

    static update(id,Prodotto,descrizione,capacita,idUnitaMisura,prezzo){
        
        let sql = `
        UPDATE anagrafiche_prodotti
        SET
            nome_prodotto = ?,
            descrizione_prodotto = ?,
            capacita = ?,
            id_unita_misura = ?,
            prezzo_listino = ?
        WHERE id_prodotto = ?;
        `;

        return db.execute(
            sql,
            [
                Prodotto,
                descrizione,
                capacita,
                idUnitaMisura,
                prezzo,
                id
            ]
        );
    }

}

module.exports = Prodotto;