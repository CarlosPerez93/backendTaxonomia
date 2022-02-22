const router = require("express").Router();
const controllerCaracteristicas_species = require("./controller");

router.get("/", controllerCaracteristicas_species.getCaracteristicas_species);
router.post(
  "/insert",
  controllerCaracteristicas_species.insertCaracteristicas_species
);
router.put(
  "/update",
  controllerCaracteristicas_species.updateCaracteristicas_species
);

module.exports = router;
