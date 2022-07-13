const express = require("express");
const {
  addrequestEmployee,
  getrequestEmployee,
  updateSingleRequest,
  deleterequestEmployee,
} = require("../controller/request-controller");
const { authGuard } = require("../middleware/auth-middleware");

const router = express.Router();

// router.use(authGuard);
router
  .route("/")
  .post(authGuard,addrequestEmployee)
  .get(authGuard,getrequestEmployee)
  .delete(authGuard,deleterequestEmployee);
router.route("/:id").put(authGuard,updateSingleRequest);

module.exports = router;
