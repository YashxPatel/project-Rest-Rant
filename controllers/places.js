const router = require('express').Router()
const places = require('../models/places.js')


router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        // Default city name if one is not provided
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})  

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', {places:places[id], id})
    }
})
  
router.get('/:id/edit', (req, res) => {
    res.send('Edit form for a place')
})

router.put('/:id', (req, res) => {
    res.send('Make changes to existing place')
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
})
  
  
  

router.post('/:id/rant', (req, res) => {
    res.send('Add rant to a place')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('Delete a rant')
})

module.exports = router


  