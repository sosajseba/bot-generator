const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const healthRoutes = require('./components/health/healthRouter');

global.jwks = undefined;

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api/health', healthRoutes);

module.exports = app;