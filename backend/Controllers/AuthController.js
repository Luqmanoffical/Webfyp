const connectDB = require("../Config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.CreateAccount = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email) {
      return res
        .status(404)
        .json({ message: "Email input is missing", status: "false" });
    }

    if (!Password) {
      return res
        .status(404)
        .json({ message: "Password is missing", status: "false" });
    }

    connectDB.query(
      "SELECT * FROM users WHERE Email = ?",
      [Email],
      (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Database error", status: "false" });
        }

        if (result.length > 0) {
          return res
            .status(400)
            .json({ message: "Email already exists", status: "false" });
        }

        bcrypt.hash(Password, 10, (err, hashedPassword) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error hashing password", status: "false" });
          }

          connectDB.query(
            "INSERT INTO users (Email, Password) VALUES (?, ?)",
            [Email, hashedPassword],
            (err, result) => {
              if (err) {
                return res.status(500).json({
                  message: "Error creating account",
                  status: "false",
                });
              }

              return res.status(200).json({
                message: "Account Created Successfully",
                status: "true",
              });
            }
          );
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      status: "false",
    });
  }
};

exports.Authenticate = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email) {
      return res
        .status(404)
        .json({ message: "Email input is missing", status: "false" });
    }

    if (!Password) {
      return res
        .status(404)
        .json({ message: "Password is missing", status: "false" });
    }

    connectDB.query(
      "SELECT * FROM users WHERE Email = ?",
      [Email],
      (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Database error", status: "false" });
        }

        if (result.length === 0) {
          return res
            .status(400)
            .json({ message: "Invalid email or password", status: "false" });
        }

        bcrypt.compare(Password, result[0].Password, (err, isMatch) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error comparing passwords", status: "false" });
          }

          if (!isMatch) {
            return res
              .status(400)
              .json({ message: "Invalid email or password", status: "false" });
          }

          const user = result[0];
          const token = jwt.sign(
            { userId: user.ID, email: user.Email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );

          return res.status(200).json({
            message: "Authentication successful",
            status: "true",
            token: token,
            Email: Email,
          });
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      status: "false",
    });
  }
};

exports.resetpass = async (req, res) => {
  try {
    const { Email, OldPassword, NewPassword } = req.body;

    // Validate inputs
    if (!Email) {
      return res
        .status(400)
        .json({ message: "Email is required", status: "false" });
    }

    if (!OldPassword) {
      return res
        .status(400)
        .json({ message: "Old Password is required", status: "false" });
    }

    if (!NewPassword) {
      return res
        .status(400)
        .json({ message: "New Password is required", status: "false" });
    }

    // Check if user exists
    connectDB.query(
      "SELECT * FROM users WHERE Email = ?",
      [Email],
      async (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Database error", status: "false" });
        }

        if (result.length === 0) {
          return res
            .status(404)
            .json({ message: "User not found", status: "false" });
        }

        const user = result[0];

        // Compare old password with stored hashed password
        const isMatch = await bcrypt.compare(OldPassword, user.Password);
        if (!isMatch) {
          return res
            .status(400)
            .json({ message: "Old password is incorrect", status: "false" });
        }

        // Hash the new password
        const saltRounds = 10;
        const hashedNewPassword = await bcrypt.hash(NewPassword, saltRounds);

        // Update the password in the database
        connectDB.query(
          "UPDATE users SET Password = ? WHERE Email = ?",
          [hashedNewPassword, Email],
          (updateErr, updateResult) => {
            if (updateErr) {
              return res
                .status(500)
                .json({ message: "Error updating password", status: "false" });
            }

            // Generate JWT token after successful password reset
            const token = jwt.sign(
              { userId: user.ID, email: user.Email },
              process.env.JWT_SECRET,
              { expiresIn: "1h" }
            );

            return res.status(200).json({
              message: "Password reset successful",
              status: "true",
              token: token,
              Email: Email,
            });
          }
        );
      }
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      status: "false",
    });
  }
};
