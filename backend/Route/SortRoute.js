const express = require("express");
const router = express.Router();
const {
  saveSortingData,
  getSortingData,
} = require("../Controllers/SortingController");

router.post("/sorting", saveSortingData);

router.get("/Getsorting/:email", getSortingData);

module.exports = router;
