const { Author } = require('../models/author.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Welcome to AS Authors"
    });
}

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllAuthors = (req,res) => {
    Author.find()
    .then((allAuthors) =>
        res.json(allAuthors)
    )
    .catch((err) => {
        res.json(err)
    });
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.editAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body,{runValidators: true}, {new:true})
        .then(editAuthor => response.json(editAuthor))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}