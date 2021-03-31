const burger = require('../models/burger')
const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {

    res.render('index.handlebars')
})


router.get('/api/burgers/get', (req, res) => {

    burger.getOrders().then(menu => {
        // console.log(menu)
        console.log(menu)
        res.json(menu)
    })
    // const burgerList = burger.getOrders()
    // console.log(burgerList) 
})

router.post('/api/burgers/eat', (req, res) => {

    const burger_name = req.body.name
    burger.devour(burger_name)

    res.redirect('/')
    console.log(burger_name)
    console.log('Putted')
})
// const burgerList = burger.getOrders()
// console.log(burgerList) 




router.post('/api/burgers/order', (req, res) => {
    const response = req.body.order
    burger.addOrder(response)


    res.redirect('/')
})



module.exports = router