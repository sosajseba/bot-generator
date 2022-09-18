const express = require('express');

const router = express.Router();

const { getHealth } = require('./healthController');

// /api/health
router.get('/', getHealth);

module.exports = router;