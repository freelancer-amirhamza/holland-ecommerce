const express = require("express");
const app = express();
const cors = require("cors");






app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/", (req, res)=>{
    res.send("<h1>Welcome to Home server</h1>")
})

module.exports = app;