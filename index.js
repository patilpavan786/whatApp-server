const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Connection = require("./database/db.js");
const Route = require("./routes/route.js");

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Route);

Connection();
const PORT = 8000;

app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`));
