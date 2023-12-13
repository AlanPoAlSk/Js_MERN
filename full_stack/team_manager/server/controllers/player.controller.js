const { Player } = require('../models/player.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Welcome to AS Authors"
    });
}

module.exports.createPlayer = (request, response) => {
    const { name, preferredPosition } = request.body;
    Player.create({
        name,
        preferredPosition,
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPlayers = (req,res) => {
    Player.find()
    .then((allPlayers) =>
        res.json(allPlayers)
    )
    .catch((err) => {
        res.json(err)
    });
}

module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.editPlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body,{runValidators: true}, {new:true})
        .then(editPlayer => response.json(editPlayer))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}