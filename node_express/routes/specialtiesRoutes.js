const express = require("express");
const {
    getSpecialties,
    getSpecialtiesById,
    addSpecialty,
    updateSpecialty,
    deleteSpecialty,
} = require("../controllers/specialties.js");

const router = express.Router();

router.get("/", getSpecialties);
router.get("/:id", getSpecialtiesById);
router.post("/", addSpecialty);
router.put("/:id", updateSpecialty);
router.delete("/:id", deleteSpecialty);

module.exports = router;
