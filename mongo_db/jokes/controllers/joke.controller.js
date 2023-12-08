const Joke = require('../models/joke.model');


//create
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
    .then(newJoke => {
        res.json({joke: newJoke})
    })
    .catch((err) => {
        res.json(err)
    });
}
//find all
module.exports.findAllJokes = (req,res) => {
    Joke.find()
    .then((allJokes) => {
        res.json({jokes: allJokes})
    })
    .catch((err) => {
        res.json(err)
    });
}
//find one
module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
    .then(oneJoke => {
        res.json({joke : oneJoke})
    })
    .catch((err) => {
        res.json(err)
    });
}
//update
module.exports.updateExistingJoke = (req,res) => {
    console.log(req.params.id)
    console.log(req.body)
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updateJoke => {
        res.json({joke : updateJoke})
    })
    .catch((err) => {
        res.json(err)
    });
}
//delete
module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne ({_id: req.params.id})
    .then(result => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json(err)
    });
} 

