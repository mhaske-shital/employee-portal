const express = require("express");

const {
  addEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
  deleteManyEmployee,
} = require("../controller/employee-controller");
const { authGuard } = require("../middleware/auth-middleware");
// const { authGuard } = require("../middleware/auth-middleware");
const router = express.Router();

// router.use(authGuard);

router.route("/").post(authGuard ,addEmployee).get(authGuard,getEmployee).delete(authGuard,deleteManyEmployee);
router.route("/:id").delete(authGuard,deleteEmployee).put(authGuard,updateEmployee);

module.exports = router;
