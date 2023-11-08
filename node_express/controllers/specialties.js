// require json file
const db = require("../db/db.json");

// get specialties
const getSpecialties = (req, res) => {
    res.send(db.specialties);
};

module.exports = {
    getSpecialties,
};
