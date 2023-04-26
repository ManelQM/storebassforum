const express = require("express"); 
const app = express(); 
const dotenv = require("dotenv").config(); 
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Running at PORT ${PORT}`); 
}); 

