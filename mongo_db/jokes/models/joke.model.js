const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup : 
    {type: String,
    required: [true, 'setup is required'],
    minlength: [10, 'setup must have at least 10 characters!']
    },
    punchline :
    {type: String,
    required: [true, 'punchline is required'],
    minlength: [3, 'a punchline must have at least 3 characters!']
    }
});

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;