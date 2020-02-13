const { Router } = require("express");
const { changeRol } = require("../controllers/privateControllers");
const router = Router();

router.get("/change", changeRol);

module.exports = router;
