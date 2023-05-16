const Conversation = require("../modal/Conversation.js");

exports.newConversation = async function(request, response) {
    try {
        let senderId = request.body.senderId;
        let receiverId = request.body.receiverId;

        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });

        if (exist) {
            response.status(200).json('conversation already exists');
            return;
        }
        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });

        await newConversation.save();
        return response.status(200).json("conversation saved successfully");
    } catch (error) {
        response.status(500).json(error);
    }
};

exports.getConversation = async function(request, response) {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [request.body.senderId, request.body.receiverId] } });
        return response.status(200).json(conversation);
    } catch (error) {
        return response.status(500).json(error);
    }
};
