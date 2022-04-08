if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const trainingRouter = require('./routes/training')
const aboutRouter = require('./routes/about')
const coursesRouter = require('./routes/courses')
const loginRouter = require('./routes/login')
const singupRouter = require('./routes/singup')
const contactRouter = require('./routes/contact')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to Mongoose'))

app.use('/', indexRouter)
app.use('/training', trainingRouter)
app.use('/about', aboutRouter)
app.use('/courses', coursesRouter)
app.use('/login', loginRouter)
app.use('/singup', singupRouter)
app.use('/contact', contactRouter)


app.listen(process.env.PORT || 3000)