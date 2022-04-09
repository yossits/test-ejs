const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

//All Contact Route
router.get('/', (req,res) => {
    res.render('pages/contact', {title: "Contact Us", active: req.originalUrl, contact: new Contact()})
})

//Create New Contact
router.post('/', async (req,res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        subject: req.body.subject,
        message: req.body.message
    })
    try {
        const newContact = await contact.save()
        res.redirect('/contact')
        console.log(newContact.id);
    } catch {
        res.render('pages/contact', {
            contact: contact,
            errorMessage: "Error Sending Contact!"
        })
    }
})

module.exports = router