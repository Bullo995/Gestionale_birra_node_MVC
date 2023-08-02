const db = require("../config/db");

class Causale {
  constructor(causale) {
    this.causale = causale;
  }

  crea() {

    let sql = `
    INSERT INTO causali(
        causale
    )
    VALUES(
      '${this.causale}'
    )
    `;

    return db.execute(sql);
  }

  static trovaTutti() {
    let sql = "SELECT * FROM causali;";

    return db.execute(sql);
  }

  static trovaById(id) {
    let sql = 
    `SELECT * FROM causali 
     WHERE id_causale = ?;`;

    return db.execute(sql,[id]); 
  }

  static update(id,causale) {

    let sql = `
    UPDATE causali
    SET causale = ?
    WHERE id_causale = ?
    `;

    return db.execute(sql, [causale, id]);
  }

  static delete(id){

    let sql =`
    DELETE FROM causali 
    WHERE id_causale = ?`;

    return db.execute(sql, [id]);
  }
}

module.exports = Causale;