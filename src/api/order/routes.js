const router = require("express").Router();
const controllerOrder = require("./controller");

router.get("/", controllerOrder.getOrder);
router.post("/insert", controllerOrder.insertOrder);
router.put("/update", controllerOrder.updateOrder);

module.exports = router;
