const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('pages/training', {title: "Training", active: req.originalUrl})
})

module.exports = router