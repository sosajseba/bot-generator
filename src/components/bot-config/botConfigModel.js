const mongoose = require('mongoose');

const botConfigSchema = new mongoose.Schema({
    keyword: {
        type: String,
        required: true
    },
    reply: {
        type: String,
        required: true
    },
    lastchanged: {
        type: Date,
        required: true
    },
    userid: {
        type: String,
        index: true,
        required: true
    }
});

module.exports = mongoose.model('BotConfig', botConfigSchema);