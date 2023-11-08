const express = require("express");
const { getSpecialties } = require("../controllers/specialties.js");

const router = express.Router();

router.get("/", getSpecialties);

module.exports = router;
