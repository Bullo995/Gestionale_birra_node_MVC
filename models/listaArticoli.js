const db = require("../config/db");

class Articolo {
    constructor(config){
        this.sottocategoriaId = config.sottocategoriaId;
        this.articoloNome = config.articoloNome;
        this.descrizione = config.descrizione || null;
        this.capacita = config.capacita || null;
        this.unitaId = config.unitaId || null;
    }

    crea(){
        
        let sql = `
        INSERT INTO anagrafiche_articoli(
            id_sottocategoria,
            nome_articolo,
            descrizione_articolo,
            capacita,
            id_unita_misura    
        )VALUES(?, ?, ?, ?, ?)
        `;
        return db.execute(
            sql,
            [
                this.sottocategoriaId, 
                this.articoloNome,
                this.descrizione,
                this.capacita,
                this.unitaId
            ]);
    }

    static trovaTutti(){
        let sql = `
        SELECT * FROM v_cbo_anagrafica_articoli
        ;`;

        return db.execute(sql);
    }
    static trovaById(id){
        
        let sql =`
        SELECT aa.*, s.id_categoria
        FROM anagrafiche_articoli AS aa
        JOIN sottocategorie AS s
        ON aa.id_sottocategoria = s.id_sottocategoria 
        WHERE id_articolo = ?;`;
    
        return db.execute(sql, [id]);
    }

    static trovaBySottocat(idSottocat){
        let sql =`
        SELECT * FROM anagrafiche_articoli
        WHERE id_sottocategoria = ?;
        `
        return db.execute(sql, [idSottocat]);
    }

    static update(id,idSottocategoria, nomeArticolo, descrizione_articolo, capacita, idUnitaM){

        let sql =`
        UPDATE anagrafiche_articoli
        SET
            id_sottocategoria = ?,
            nome_articolo = ?,
            descrizione_articolo = ?,
            capacita = ?,
            id_unita_misura = ?
        WHERE id_articolo = ?
        `;

        return db.execute(
            sql, 
            [  
                idSottocategoria,
                nomeArticolo, 
                descrizione_articolo,
                capacita,
                idUnitaM,
                id
            ]);
    }

    static delete(id){

        let sql =`
        DELETE FROM anagrafiche_articoli 
        WHERE id_articolo = ?`;
    
        return db.execute(sql, [id]);
      }
}

module.exports = Articolo;