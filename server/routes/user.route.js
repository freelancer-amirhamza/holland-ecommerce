const express = require('express');
const router = express.Router();

router.get('/register', (req, res)=>{
    res.send('<h1>Welcome to Register Server</h1>')
});



module.exports = router;