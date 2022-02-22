const router = require("express").Router();
const controllerSpecies = require("./controller");

router.get("/", controllerSpecies.getSpecies);
router.post("/insert", controllerSpecies.insertSpecies);
router.put("/update", controllerSpecies.updateSpecies);

module.exports = router;
