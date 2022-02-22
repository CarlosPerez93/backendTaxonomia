const router = require("express").Router();
const controllerEdge_or_division = require("./controller");

router.get("/", controllerEdge_or_division.getEdge_or_division);
router.post("/insert", controllerEdge_or_division.insertEdge_or_division);
router.put("/update", controllerEdge_or_division.updateEdge_or_division);

module.exports = router;
