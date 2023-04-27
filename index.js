const express = require("express"); 
const db = require("./config/dB");
const app = express(); 
const dotenv = require("dotenv").config(); 
const PORT = process.env.PORT || 3000; 
db();

app.use("/", (req, res) => {
    res.send("Hello! I am your server");
});

app.listen(PORT, () => {
    console.log(`Running at PORT ${PORT}`); 
}); 

