const express = require("express");
const router = express();
const controller = require("../controller/auth");


router.post("/",controller.registers)
router.post("/login", controller.Login)

module.exports = router;