const express = require('express');
// const authMiddleware = require('../../middlewares/auth')
// const xmlValidator = require('../../middlewares/xml')

const router = express.Router();

const {
    createBotConfig,
    getBotConfigs,
    getBotConfigById,
    deleteBotConfig,
    updateBotConfig,
    createBot
} = require('./botConfigController');

// /api/bot-initialize
router.get('/initialize', createBot);

// /api/bot-config
router.get('/', getBotConfigs);
router.post('/', createBotConfig);

// /api/bot-config/:id
router.get('/:id', getBotConfigById);
router.put('/:id', updateBotConfig);
router.delete('/:id', deleteBotConfig);

module.exports = router;