//export all endpoints of availability
const express = require("express");
const genericRoutes = express.Router();

const user = require("./user");
const kingdom = require("./kingdom");
const edge_or_division = require("./edge_or_division");
const classs = require("./class");
const order = require("./order");
const family = require("./family");
const gender = require("./gender");
const species = require("./species");
const species_characteristics = require("./species_characteristics");

genericRoutes.use("/user", user);
genericRoutes.use("/kingdom", kingdom);
genericRoutes.use("/edge_or_division", edge_or_division);
genericRoutes.use("/class", classs);
genericRoutes.use("/order", order);
genericRoutes.use("/gender", gender);
genericRoutes.use("/species", species);
genericRoutes.use("/species_characteristics", species_characteristics);

module.exports = genericRoutes;
