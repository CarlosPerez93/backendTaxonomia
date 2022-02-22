const router = require("express").Router();
const controllerGender = require("./controller");

router.get("/", controllerGender.getGender);
router.post("/insert", controllerGender.insertGender);
router.put("/update", controllerGender.updateGender);

module.exports = router;
