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

const filePath1 = path.join(__dirname, ".env");

require("dotenv").config({ path: filePath1 });

global.INV = process.env.INV;

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/all", require("./routes/props"));
app.use("/api/des", require("./routes/descrip"));
app.use("/api/busqueda", require("./routes/busqueda"));
app.use("/api/agregar", require("./routes/agrega"));
app.use("/api/contacto", require("./routes/contactame"));
app.use("/api/contactanos", require("./routes/contactanos"));
app.use("/api/locali", require("./routes/localizacion"));
app.use("/api/agreimg", require("./routes/agreimg"));
app.use("/api/ameni", require("./routes/agreamenidades"));

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
