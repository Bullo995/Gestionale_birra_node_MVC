const db = require("../config/db");

class Sottocategoria {
  constructor(sottocategoria, idCategoria) {
    this.sottocategoria = sottocategoria;
    this.idCategoria = idCategoria;
  }

  crea() {

    let sql = `
    INSERT INTO sottocategorie(
        sottocategoria,
        id_categoria
    )
    VALUES(
      '${this.categoria}',
      '${this.idCategoria}'
    )
    `;

    return db.execute(sql);
  }

  static trovaByCategoria(){
    let sql = `
    SELECT * FROM sottocategorie
    WHERE id_categoria = ?
    `
    return db.execute(sql, [idCategoria]);
  }

  static trovaTutti() {
    let sql = "SELECT * FROM sottocategorie;";

    return db.execute(sql);
  }

  static trovaById(id) {
    let sql = 
    `SELECT * FROM sottocategorie 
     WHERE id_sottocategoria = ?;`;

    return db.execute(sql,[id]); 
  }

  static update(id,sottocategoria,idCategoria) {

    let sql = `
    UPDATE sottocategorie
    SET sottocategoria = ?
    SET id_categoria = ?
    WHERE id_ = sottocategoria ?
    `;

    return db.execute(sql, [sottocategoria, id, idCategoria]);
  }

  static delete(id){

    let sql =`
    DELETE FROM sottocategorie 
    WHERE id_sottocategoria = ?`;

    return db.execute(sql, [id]);
  }
}

module.exports = Sottocategoria;