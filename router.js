var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.get( '/', (req,res) => res.render('index',{title: 'Hello World'}) )

module.exports = router
