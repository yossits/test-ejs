const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('pages/singup', {title: "Singup", active: req.originalUrl})
})

module.exports = router