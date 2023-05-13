const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === "true",
});
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Errore durante la connessione al database:", err);
  } else {
    console.log(
      "Connessione al database stabilita con successo:",
      res.rows[0].now
    );
  }
});

module.exports = pool;