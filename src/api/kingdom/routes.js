const router = require("express").Router();
const controllerKingdom = require("./controller");

router.get("/", controllerKingdom.getKingdoms);
router.post("/insert", controllerKingdom.insertKingdom);
router.put("/update", controllerKingdom.updateKingdom);

module.exports = router;
