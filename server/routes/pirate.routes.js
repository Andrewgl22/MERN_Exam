const Pirate = require('../controllers/pirate.controllers');

module.exports = (app) => {
    app.get('/api/pirates', Pirate.allPirates),
    app.post('/api/pirate/new', Pirate.createPirate),
    app.get('/api/pirate/:id', Pirate.onePirate),
    app.delete('/api/pirate/delete/:id', Pirate.deletePirate)
}