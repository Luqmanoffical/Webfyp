const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
require("dotenv").config();
// Middleware to parse JSON requests
app.use(express.json());

const Port = process.env.PORT;
// Middleware
app.use(cors());

app.use(bodyParser.json());
// Allow CORS for all origins
const AuthRoute = require("./Routes/AuthRoutes");

app.use("/", AuthRoute);




// Start the server
app.listen(Port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
