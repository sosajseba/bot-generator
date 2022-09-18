const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const healthRoutes = require('./components/health/healthRouter');
const botConfigRoutes = require('./components/bot-config/botConfigRouter');

global.jwks = undefined;

//db connection
mongoose.connect(process.env.RS_MONGO_CON_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conected to mongodb!'))
    .catch(err => console.log('Cannot conect to mongodb', err));

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api/health', healthRoutes);
app.use('/api/bot-config', botConfigRoutes);

module.exports = app;