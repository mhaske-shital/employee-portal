const express=require("express")
const { login, getLoginEmployee } = require("../controller/auth-controller")
const { authGuard } = require("../middleware/auth-middleware")

const router =express.Router()


router.route("/").post(login)
router.route("/:id").get(getLoginEmployee)
module.exports=router