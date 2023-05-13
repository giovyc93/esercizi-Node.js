const express = require("express");
const router = express.Router();
const pool = require("../db");
const authorize = require("../middleware/authorize");


router.get("/logout", authorize, async (req, res) => {
  try {
    const userId = req.user.id;
    await pool.query("UPDATE users SET token=NULL WHERE id=$1", [userId]);
    res.status(200).json({ message: "Logout effettuato con successo." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Errore durante il logout." });
  }
});



module.exports = router;