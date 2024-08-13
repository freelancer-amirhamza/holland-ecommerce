const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>Welcome to Home server</h1>")
})

module.exports = app;