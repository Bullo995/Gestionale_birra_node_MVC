const db = require("../config/db");

class UnitaMisura {
  constructor(unitaMisura) {
    this.unitaMisura = unitaMisura;
  }

  crea() {

    let sql = `
    INSERT INTO unita_misura(
        unita_misura
    )
    VALUES(?)
    `;

    return db.execute(sql,[this.unitaMisura]);
  }

  static trovaTutti() {
    let sql = "SELECT * FROM unita_misura;";

    return db.execute(sql);
  }

  static trovaById(id) {
    let sql = 
    `SELECT * FROM unita_misura 
     WHERE id_unita_misura = ?;`;

    return db.execute(sql,[id]); 
  }

  static update(id,unitaMisura) {

    let sql = `
    UPDATE unita_misura
    SET unita_misura = ?
    WHERE id_unita_misura = ?
    `;

    return db.execute(sql, [unitaMisura, id]);
  }

  static delete(id){

    let sql =`
    DELETE FROM unita_misura 
    WHERE id_unita_misura = ?`;

    return db.execute(sql, [id]);
  }
}

module.exports = UnitaMisura;