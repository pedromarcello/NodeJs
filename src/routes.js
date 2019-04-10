const express = require('express');

const routes = express.Router();

const BoxController = require('./Controllers/BoxController');

routes.post("/boxes",BoxController.store);

module.exports = routes;