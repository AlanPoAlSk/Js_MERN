const mongoose = require('mongoose');

const PlayerSchema  = new mongoose.Schema({
    name: {
        type: String,
        required:[
            true,
            "{PATH} is required"
        ],
        minlength : [3, '{PATH} must be at least 3 characters long']
        
    },
    preferredPosition: {
        type: String
    }
}, {timestamps: true} );
module.exports.Player = mongoose.model('Player', PlayerSchema);