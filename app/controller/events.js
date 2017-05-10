'use strict'
const mongoose = require('mongoose')
const Event = require('../../models/event')
const moment =require('moment')
mongoose.Promise = global.Promise;

function getEvents(req,res){
    Event.find({}).exec()
    .then(events=> res.status(200).send({events}))
    .catch(err=>res.status(500).send({message:err}))
}

function getEventsToday(req,res){
    
    Event.find({start:{'$regex':moment().format('YYYY-MM-DD') + '.*'}}).exec()
    .then(events => res.status(200).send({events}))
    .catch(err =>res.status(500).send({message:err}))
}

function getEvent(req, res){
    Event.findById(req.params.id).exec().then( event => {

        if(!event) {
            res.status(404).send({message:" La nota no existe"})
        }else{
            res.status(200).send({ error:false, message:" Ok Nota encontrda", event})
        }
    
    }).catch(err => resp.status(500).send({error:true,message:`Error al buscar la nota:${err}`}))
}

function saveEvent(req,res){
    let event = new Event();
    event.title = req.body.title
    event.comment = req.body.comment
    event.start = req.body.start
    event.end = req.body.end
    event.save().then(nota => {
        res.status(200).send({error:false, message:" Ok Evento guardado con exito!", event})
    },err=>res.status(500).send({error:true, message:`Error al salvar el evento :${err}`}));
}

function deleteEvent(req,res){
    Event.deleteOne({_id:req.params.id},err => {
    if(err){
      res.status(500).send({ error:true, message:`Error al eliminar el evento: ${err}`})
    }else{
      res.status(200).send({ error:false, message:" Ok Evento eliminado con exito!"})
    }
  })
}

function updateEvent(req,res){
    Event.findByIdAndUpdate({_id:req.params.id},req.body).exec()
    .then((event)=>res.status(200).send({error:false, message:" Ok Evento actualizado con exito!"}))
    .catch((err)=>res.status(500).send({error:true, message:`Error al salvar el evento :${err}`}))
}

module.exports = {
    getEvents,
    getEventsToday,
    getEvent,
    saveEvent,
    deleteEvent,
    updateEvent
    
}