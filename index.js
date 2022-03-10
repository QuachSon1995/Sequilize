const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const env = require('dotenv');
env.config();
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded( {extended: true} ))
const db = require("./config/db");
db.sync().then(() => {
    console.log("Connect mysql success");
});
const account = require('./routes/account');
app.use("/api/v1/account", account);

const category = require('./routes/category');
app.use("/api/v1/category", category);

// const brand = require('./routes/brand');
// app.use("/api/v1/brand", brand);

app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
});