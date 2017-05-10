'use strict'
const express = require('express');
const api = express.Router();
const eventCtrl = require('../controller/events')

api.get('/events',eventCtrl.getEvents);

api.get('/event/:id',eventCtrl.getEvent);

api.get('/events/today',eventCtrl.getEventsToday);

api.post('/event', eventCtrl.saveEvent);

api.put('/event/:id',eventCtrl.updateEvent);

api.delete('/event/:id',eventCtrl.deleteEvent);

module.exports = api;