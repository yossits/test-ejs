const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('pages/contact', {title: "Contact Us", active: req.originalUrl})
})

module.exports = router