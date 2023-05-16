var mongoose = require("mongoose");

var ConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }},
    {
        timestamps: true
    }
);

var conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = conversation;
