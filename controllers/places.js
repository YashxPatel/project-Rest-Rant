const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('The home page')
})

router.get('/places', (req, res) => {
    res.send('Index page listing all places')
})

router.get('/places/new', (req, res) => {
    res.send('New form for a place')
})

router.post('/places', (req, res) => {
    res.send('Create a new place')
})

router.get('/places/:id', (req, res) => {
    res.send('Show one place in detail (Associated rants, new rant form, delete rant button)')
})

router.get('/places/:id/edit', (req, res) => {
    res.send('Edit form for a place')
})

router.put('/places/:id', (req, res) => {
    res.send('Make changes to existing place')
})

router.delete('/places/:id', (req, res) => {
    res.send('Delete a place')
})

router.post('/places/:id/rant', (req, res) => {
    res.send('Add rant to a place')
})

router.delete('/places/:id/rant/:rantId', (req, res) => {
    res.send('Delete a rant')
})

module.exports = router
