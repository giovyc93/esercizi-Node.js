const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");

router.post("/planets/:id/images", authorize, async (req, res) => {});

module.exports = router;