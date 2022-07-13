const express = require("express");
const { addStatus, getStatus } = require("../controller/status-controller");
// const { getStatus } = require("../controller/status-controller");

const router = express.Router();
router;

router.route("/").post(addStatus);
router.route("/status").get(getStatus);

module.exports = router;
