const BotConfig = require('./botConfigModel');
const schema = require('./botConfigValidator');

const botHandler = require('../../handlers/botHandler');

module.exports = {

    getBotConfigById: async function (req, res) {
        try {

            const { id } = req.params;

            const botConfig = await BotConfig.findById({ _id: id });

            if (botConfig) {
                return res.json(botConfig)
            }

            return res.status(404).json({
                message: 'Bot config not found'
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    },

    getBotConfigs: async function (req, res) {
        try {
            const botConfigs = await BotConfig.find();
            return res.json(botConfigs)
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    },

    createBotConfig: async function (req, res) {
        const { keyword, reply, userid } = req.body;

        try {
            const value = await schema.validateAsync({
                keyword,
                reply,
                userid
            });

            let newBotConfig = new BotConfig(value);

            newBotConfig.lastchanged = Date.now();

            if (newBotConfig) {
                await newBotConfig.save();

                return res.status(200).json({
                    message: 'Bot config created!',
                    data: newBotConfig
                });
            }

        }
        catch (error) {
            return res.status(500).json({
                message: error
            });
        }
    },

    updateBotConfig: async function (req, res) {
        const { id } = req.params;
        const { keyword, reply, userid } = req.body;

        try {

            const value = await schema.validateAsync({
                keyword,
                reply,
                userid
            });

            const botConfig = await BotConfig.findById({ _id: id });

            if (botConfig) {
                await BotConfig.findByIdAndUpdate({ _id: id }, {
                    $set: {
                        keyword: value.keyword,
                        reply: value.reply,
                        lastchanged: Date.now(),
                        userid: value.userid
                    },

                }, { new: true, useFindAndModify: false })

                return res.json({
                    message: 'Bot config updated',
                    data: botConfig
                })
            }

            return res.status(404).json({
                message: 'Bot config not found'
            });

        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    },

    deleteBotConfig: async function (req, res) {
        try {
            const { id } = req.params;

            const botConfig = await BotConfig.findById({ _id: id });

            if (botConfig) {
                await BotConfig.deleteOne({ _id: id });
                return res.json({
                    message: 'Bot config deleted'
                });
            }

            return res.status(404).json({
                message: 'Bot config not found'
            });

        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    },

    createBot: async function (req, res) {
        try {

            const { botconfigid } = req.query;

            const botConfig = await BotConfig.findById({ _id: botconfigid })

            if (botConfig) {

                const qr = await botHandler.initializeBot(botConfig);

                return res.json({ qr: qr })
            }

            return res.status(404).json({
                message: 'Bot config not found'
            });

        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

}