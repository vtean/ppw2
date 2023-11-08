// require json file
const db = require("../db/db.json");

// get specialties
const getSpecialties = (req, res) => {
    res.json(db.specialties);
};

// get specialties by id
const getSpecialtiesById = (req, res) => {
    const id = req.params.id;
    const specialty = db.specialties.find((specialty) => specialty.id == id);
    res.json(specialty);
};

// add specialty
const addSpecialty = (req, res) => {
    const specialty = req.body;
    db.specialties.push(specialty);
    res.json(db.specialties);
};

// update specialty
const updateSpecialty = (req, res) => {
    const specialtyIndex = db.specialties.findIndex((specialty) => specialty.id == req.params.id);
    db.specialties.splice(specialtyIndex, 1, req.body);
    res.json(req.body);
};

// delete specialty
const deleteSpecialty = (req, res) => {
    const specialtyIndex = db.specialties.findIndex((specialty) => specialty.id == req.params.id);
    db.specialties.splice(specialtyIndex, 1);
    res.json({});
};

module.exports = {
    getSpecialties,
    getSpecialtiesById,
    addSpecialty,
    updateSpecialty,
    deleteSpecialty,
};
