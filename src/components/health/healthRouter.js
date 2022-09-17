const express = require('express');

const router = express.Router();

const { getHealth } = require('./healthController');

// /api/Health
router.get('/', getHealth);

module.exports = router;