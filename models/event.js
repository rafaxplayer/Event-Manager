'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const moment = require('moment');

const EventSchema= Schema({
    title: { type:String, unique:true , required:true ,index:true},
    comment: { type:String, required:true },
    createAt:{ type:String, default: moment().format('YYYY-MM-DDThh:mm')},
    start:{ type:String, default: moment().format('YYYY-MM-DDThh:mm')},
    end:{ type:String, default: moment().format('YYYY-MM-DDThh:mm')}
})

module.exports = mongoose.model("Event", EventSchema)