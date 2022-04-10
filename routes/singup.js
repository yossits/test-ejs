const express = require('express')
const router = express.Router()
const Singup = require('../models/singup')

router.get('/', (req,res) => {
    res.render('pages/singup', {title: "Singup", active: req.originalUrl, singup: new Singup()})
})

router.post('/', async (req,res) => {
    const singup = new Singup({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword
    })
    try {
        const newSingup = await singup.save()
        res.redirect('/singup')
        console.log(newSingup);
    }
    catch {
        res.render('pages/singup/', {
            singup: singup,
            errorMessage: "Error Sending Singup!"
        })
    }
})

module.exports = router