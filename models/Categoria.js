const db = require("../config/db");

class Categoria {
  constructor(categoria) {
    this.categoria = categoria;
  }

  crea() {

    let sql = `
    INSERT INTO categorie(
      categoria
    )
    VALUES(
      '${this.categoria}'
    )
    `;

    return db.execute(sql);
  }

  static trovaTutti() {
    let sql = "SELECT * FROM categorie;";

    return db.execute(sql);
  }

  static trovaById(id) {
    let sql = 
    `SELECT * FROM categorie 
     WHERE id_categoria = ?;`;

    return db.execute(sql,[id]); 
  }

  static update(id,categoria) {

    let sql = `
    UPDATE categorie
    SET categoria = ?
    WHERE id_categoria = ?
    `;

    return db.execute(sql, [categoria, id]);
  }

  static delete(id){

    let sql =`
    DELETE FROM categorie 
    WHERE id_categoria = ?`;

    return db.execute(sql, [id]);
  }
}

module.exports = Categoria;