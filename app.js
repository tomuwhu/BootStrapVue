const express = require('express')
const createError = require('http-errors')
const ejs = require('ejs')
const path = require('path')
const app = express()
const router = require('./router')
app.use('/', router)
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use( (req, res, next) => {
  next(createError(404))
})
app.use( (err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('system/error',{title: "Hiba az oldalon"})
})
app.listen(3000)
