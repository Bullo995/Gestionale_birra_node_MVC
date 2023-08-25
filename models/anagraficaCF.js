const db = require("../config/db");

class AnagraficaCF{
    constructor(config) {
        this.ragioneSociale = config.ragioneSociale;
        this.indrizzo = config.indrizzo;
        this.cap = config.cap;
        this.citta = config.citta;
        this.siglaProvincia = config.siglaProvincia;
        this.partitaIva = config.partitaIva;
        this.numeroTel = config.numeroTel;
        this.email = config.email;
        this.clienteFornitore = config.clienteFornitore;
    }

    crea() {
        let sql = `
        INSERT INTO clienti_fornitori(
            ragione_sociale,
            indirizzo,
            cap,
            citta,
            sigla_provincia,
            partita_iva,
            numero_telefono,
            email,
            c_f
        )
        VALUES(?,?,?,?,?,?,?,?,?)
        ;`;

        return db.execute(
            sql,
            [
                this.ragioneSociale,
                this.indrizzo,
                this.cap,
                this.citta,
                this.siglaProvincia,
                this.partitaIva,
                this.numeroTel,
                this.email,
                this.clienteFornitore
            ])
    }

    static trovaTutti() {
        let sql = "SELECT * FROM clienti_fornitori;"
        
        return db.execute(sql);
    }

    static trovaById(id){
        
        let sql = `
        SELECT * FROM clienti_fornitori
        WHERE id_cliente_fornitore = ?;
        `;

        return db.execute(sql,[id]);
    }

    static update(
        idClienteFornitore,
        ragioneSociale, 
        indrizzo, 
        cap, 
        citta, 
        siglaProvincia,
        partitaIva,
        numeroTel,
        email,
        clienteFornitore
        ){

            let sql = `
            UPDATE clienti_fornitori
            SET
                ragione_sociale = ?,
                indirizzo = ?,
                cap = ?,
                citta = ?,
                sigla_provincia = ?,
                partita_iva = ?,
                numero_telefono = ?,
                email = ?,
                c_f = ?
            WHERE id_cliente_fornitore = ?;
            `;

            return db.execute(
                sql,
                [
                    ragioneSociale, 
                    indrizzo, 
                    cap, 
                    citta, 
                    siglaProvincia,
                    partitaIva,
                    numeroTel,
                    email,
                    clienteFornitore,
                    idClienteFornitore
                ]
            );
        }

    static delete(id){

        let sql =`
        DELETE FROM clienti_fornitori 
        WHERE id_cliente_fornitore = ?;
        `;
    
        return db.execute(sql, [id]);
      }
}

module.exports = AnagraficaCF;