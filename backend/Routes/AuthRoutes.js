const express = require("express");
const {CreateAccount} = require("../Controllers/AuthController");
const router = express.Router();



//Routes
router.post("/Register", CreateAccount);




