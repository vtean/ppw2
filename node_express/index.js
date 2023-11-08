const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const specialtiesRoutes = require("./routes/specialtiesRoutes.js");

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/specialties", specialtiesRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
