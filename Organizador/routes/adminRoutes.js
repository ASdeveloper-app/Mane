const {
  Router
} = require("express");
const {
  dashboardView,
  datosView,
  perfilView
} = require("../controllers/adminControllers");
const router = Router();


router.get("/admin/datosevento", datosView);
router.get("/admin/perfilprincipal", perfilView);

module.exports = router;