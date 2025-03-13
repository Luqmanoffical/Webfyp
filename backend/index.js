const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
require("dotenv").config();
app.use(express.json());

const Port = process.env.PORT;
app.use(cors());

app.use(bodyParser.json());

const AuthRoute = require("./Route/AuthRoutes");
const SortingRoute = require("./Route/SortRoute");

app.use("/", AuthRoute);
app.use("/api", SortingRoute);

app.listen(Port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
