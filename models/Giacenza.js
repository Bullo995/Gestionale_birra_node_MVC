const db = require("../config/db");

class Giacenza{
    static articoli(){
        const sql = ` SELECT * FROM v_cbo_giacenza_magazzino_totale`
        return db.execute(sql);
    }

    static prodotti(){
        const sql = ` SELECT * FROM v_cbo_giacenza_prodotti`
        return db.execute(sql);
    }

    static articoliLotto(){
        const sql = ` SELECT * FROM v_cbo_giacenze_articoli_lotto`
        return db.execute(sql);
    }

    static prodottiLotto(){
        const sql = ` SELECT * FROM v_cbo_giacenze_prodotti_lotto`
        return db.execute(sql);
    }

    static articoliScaduti(){
        const sql = ` SELECT * FROM v_cbo_scadenza_articoli_lotto`
        return db.execute(sql);
    }

    static prodottiScaduti(){
        const sql = ` SELECT * FROM v_cbo_scadenza_prodotti_lotto`
        return db.execute(sql);
    }

}

module.exports = Giacenza;