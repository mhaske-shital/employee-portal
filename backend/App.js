const express = require("express");


const PORT = process.env.PORT || 5000;
const env = require("dotenv");
env.config({ path: "./config/.env" });
const cors = require("cors");
const db = require("./config/db");
const emplyoeeRoute = require("./routes/employe-route");
const deleteManyemplyoeeRoute = require("./routes/employe-route");
const statusRoute = require("./routes/status-route");
const requestRoute = require("./routes/request-routes");
const allRequesttRoute = require("./routes/request-routes");
const deleteRequesttRoute = require("./routes/request-routes");
const authLoginRoute = require("./routes/auth-route");

db();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.static("public/"))
app.use("/add-employee", emplyoeeRoute);
app.use("/delete-employee", emplyoeeRoute);
app.use("/delete-all-employee", deleteManyemplyoeeRoute);
app.use("/get-employee", emplyoeeRoute);
app.use("/update-employee", emplyoeeRoute);
app.use("/add-status", statusRoute);
app.use("/get-status", statusRoute);
app.use("/add-request", requestRoute);
app.use("/delete-request", deleteRequesttRoute);
app.use("/get-request", allRequesttRoute);
app.use("/auth-login", authLoginRoute);
app.use("/login", authLoginRoute);
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
