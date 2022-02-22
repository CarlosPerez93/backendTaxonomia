const router = require("express").Router();
const controllerUser = require("./controller");

router.get("/", controllerUser.getUsers);
router.post("/insert", controllerUser.insertUser);
router.put("/update", controllerUser.updateUser);

module.exports = router;
