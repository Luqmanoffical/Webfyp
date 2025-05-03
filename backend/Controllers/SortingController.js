const connectDB = require("../Config/db.js");

const saveSortingData = (req, res) => {
  try {
    const { selectedAlgorithm, array, user_id, time } = req.body;

    if (!selectedAlgorithm) {
      return res
        .status(400)
        .json({ success: false, message: "Algorithm type is required" });
    }
    if (!array || !Array.isArray(array)) {
      return res.status(400).json({
        success: false,
        message: "Array data is required and must be an array",
      });
    }

    if (array.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Array must contain at least 2 numbers",
      });
    }

    if (array.length > 100) {
      return res.status(400).json({
        success: false,
        message:
          "Array must contain at most 100 numbers for optimal visualization",
      });
    }

    const isValidArray = array.every(
      (item) => typeof item === "number" && !isNaN(item)
    );
    if (!isValidArray) {
      return res.status(400).json({
        success: false,
        message: "Array must contain only valid numbers",
      });
    }

    const arrayString = JSON.stringify(array);
    const query =
      "INSERT INTO sorting_data (algorithm, array_data, created_at , user_id, time) VALUES (?, ?, NOW() , ?, ?)";

    connectDB.query(
      query,
      [selectedAlgorithm, arrayString, user_id, time],
      (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return res
            .status(500)
            .json({ success: false, message: "Failed to save sorting data" });
        }
        return res.status(201).json({
          success: true,
          message: "Sorting data saved successfully",
          data: {
            id: result.insertId,
            algorithm: selectedAlgorithm,
            arrayLength: array.length,
            time: time,
          },
        });
      }
    );
  } catch (error) {
    console.error("Server error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const getSortingData = (req, res) => {
  try {
    const { email } = req.params;
    const query =
      "SELECT id, algorithm, array_data, created_at , time  FROM sorting_data  WHERE user_id = ?  ORDER BY created_at DESC  LIMIT 50;";

    console.log("This is the email", email);
    const cleanedEmail = email.replace(/^email=/, "");

    connectDB.query(query, cleanedEmail, (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res
          .status(500)
          .json({ success: false, message: "Failed to retrieve sorting data" });
      }
      const formattedResults = results.map((item) => ({
        id: item.id,
        algorithm: item.algorithm,
        array: JSON.parse(item.array_data),
        createdAt: item.created_at,
        time: item.time,
      }));

      return res.status(200).json({
        success: true,
        data: formattedResults,
      });
    });
  } catch (error) {
    console.error("Server error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  saveSortingData,
  getSortingData,
};
