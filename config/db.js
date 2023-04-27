 const { default: mongoose } = require("mongoose");

 const db = () => {
    try{
      const connect = mongoose.connect ('mongodb://127.0.0.1:27017/');
      console.log ("Welcome to your DB, connected successfully!"); 
    } catch (error) {
      console.log ("Something is wrong, not connected");
    }
 };

 module.exports = db; 