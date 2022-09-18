const Joi = require('@hapi/joi');

module.exports = Joi.object({
    keyword: Joi.string()
        .min(3)
        .max(100)
        .required(),
    reply: Joi.string()
        .min(3)
        .required(),
    userid: Joi.string()
        .min(3)
        .max(30)
        .required()
})