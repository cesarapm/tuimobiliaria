const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*", // Reemplazar con dominio
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/all", require("./routes/props"));

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
