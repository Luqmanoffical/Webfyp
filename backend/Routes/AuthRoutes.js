const express = require("express");
const {CreateAccount, Authenticate} = require("../Controllers/AuthController");
const router = express.Router();



//Routes
router.post("/Register", CreateAccount);
router.post("/login", Authenticate);






module.exports = router;




