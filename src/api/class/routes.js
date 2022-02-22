const router = require("express").Router();
const controllerClass = require("./controller");

router.get("/", controllerClass.getClass);
router.post("/insert", controllerClass.insertClass);
router.put("/update", controllerClass.updateClass);

module.exports = router;
