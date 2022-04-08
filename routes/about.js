const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('pages/about', {title: "About Us", active: req.originalUrl})
})

module.exports = router