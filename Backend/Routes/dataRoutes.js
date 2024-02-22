const express = require("express");
const DataModel = require("../Models/DataModel");
const router = express.Router();

router.get("/getAllData", async (req, res) => {
  try {
    const allData = await DataModel.find();
    console.log(allData.length);
    res
      .status(200)
      .json({ data: allData, message: "Data fetched successfullly." });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
});

module.exports = router;
