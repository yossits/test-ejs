const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('index', {title: "Home Page", active: req.originalUrl})
})

module.exports = router