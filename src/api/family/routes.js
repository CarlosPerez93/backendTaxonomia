const router = require("express").Router();
const controllerFamily = require("./controller");

router.get("/", controllerFamily.getFamily);
router.post("/insert", controllerFamily.insertFamily);
router.put("/update", controllerFamily.updateFamily);

module.exports = router;
