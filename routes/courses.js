const express = require('express')
const router = express.Router()

router.get('/angular10', (req,res) => {
    res.render('pages/courses/angular10', {title: "Angular 10", active: req.originalUrl})
})

router.get('/reactjs', (req,res) => {
    res.render('pages/courses/reactjs', {title: "React JS", active: req.originalUrl})
})

router.get('/bootstrap5', (req,res) => {
    res.render('pages/courses/bootstrap5', {title: "Bootstrap 5", active: req.originalUrl})
})

router.get('/java14', (req,res) => {
    res.render('pages/courses/java14', {title: "Java 14", active: req.originalUrl})
})

module.exports = router