const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api', PlayerController.index);
    app.get('/api/players', PlayerController.getAllPlayers);
    app.get('/api/players/:id', PlayerController.getPlayer);
    app.post('/api/players', PlayerController.createPlayer);
    app.patch('/api/players/:id', PlayerController.editPlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}