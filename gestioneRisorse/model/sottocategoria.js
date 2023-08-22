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
    VALUES(?, ?)
    `;

    return db.execute(sql,[this.sottocategoria,this.idCategoria]);
  }

  static trovaByCategoria(idCategoria){
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
    SET sottocategoria = ?, id_categoria = ?
    WHERE id_sottocategoria = ?
    `;

    return db.execute(sql, [sottocategoria, idCategoria, id ]);
  }

  static delete(id){

    let sql =`
    DELETE FROM sottocategorie 
    WHERE id_sottocategoria = ?`;

    return db.execute(sql, [id]);
  }
}

module.exports = Sottocategoria;