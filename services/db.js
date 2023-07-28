const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "db_birra",
});

conn.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err.stack);
      return;
    }
  
    console.log('Connected to MySQL database as id', conn.threadId);
  });

module.exports = conn;