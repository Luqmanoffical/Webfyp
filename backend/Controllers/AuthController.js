const connectDB = require("../Config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.CreateAccount = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Check if Email is provided
    if (!Email) {
      return res.status(404).json({ message: "Email input is missing", status: "false" });
    }

    // Check if Password is provided
    if (!Password) {
      return res.status(404).json({ message: "Password is missing", status: "false" });
    }

    // Check if the email already exists in the database
    connectDB.query("SELECT * FROM users WHERE Email = ?", [Email], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", status: "false" });
      }

      // If the result has any entries, it means the email already exists
      if (result.length > 0) {
        return res.status(400).json({ message: "Email already exists", status: "false" });
      }

      // If the email doesn't exist, hash the password
      bcrypt.hash(Password, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ message: "Error hashing password", status: "false" });
        }

        // Insert the new user into the database
        connectDB.query("INSERT INTO users (Email, Password) VALUES (?, ?)", [Email, hashedPassword], (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "Error creating account",
              status: "false",
            });
          }

          // Return success response
          return res.status(200).json({
            message: "Account Created Successfully",
            status: "true",
          });
        });
      });
    });
  } catch (error) {
    // Catch any errors and return an internal server error response
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      status: "false",
    });
  }
};



exports.Authenticate = async (req, res) => {
    try {
      const { Email, Password } = req.body;
  
      // Check if Email is provided
      if (!Email) {
        return res.status(404).json({ message: "Email input is missing", status: "false" });
      }
  
      // Check if Password is provided
      if (!Password) {
        return res.status(404).json({ message: "Password is missing", status: "false" });
      }
  
      // Check if the email exists in the database
      connectDB.query("SELECT * FROM users WHERE Email = ?", [Email], (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Database error", status: "false" });
        }
  
        // If no user is found, return an error
        if (result.length === 0) {
          return res.status(400).json({ message: "Invalid email or password", status: "false" });
        }
  
        // Compare the provided password with the hashed password in the database
        bcrypt.compare(Password, result[0].Password, (err, isMatch) => {
          if (err) {
            return res.status(500).json({ message: "Error comparing passwords", status: "false" });
          }
  
          // If passwords do not match
          if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password", status: "false" });
          }
  
          // If authentication is successful, generate a JWT
          const user = result[0];
          const token = jwt.sign(
            { userId: user.ID, email: user.Email },  // Payload (can be customized)
            process.env.JWT_SECRET,                  // Secret key for signing the token
            { expiresIn: '1h' }                     // Token expiration (1 hour in this case)
          );
  
          // Send the token as response
          return res.status(200).json({
            message: "Authentication successful",
            status: "true",
            token: token,                            // Return the JWT token
          });
        });
      });
    } catch (error) {
      // Catch any errors and return an internal server error response
      return res.status(500).json({
        message: error.message || "Internal Server Error",
        status: "false",
      });
    }
  };