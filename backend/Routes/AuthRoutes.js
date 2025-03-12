const express = require("express");
const {
  CreateAccount,
  Authenticate,
  resetpass,
} = require("../Controllers/AuthController");
const router = express.Router();

router.post("/Register", CreateAccount);
router.post("/login", Authenticate);
router.post("/restpass", resetpass);

module.exports = router;
