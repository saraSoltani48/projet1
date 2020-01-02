const express = require("express");
const Router = express.Router();
const reservation=require("../models/reservation")
//Get ALl
Router.get("/", (req, res) => {
    reservation.find()
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
//findOne
  Router.get("/:_id", (req, res) => {
    const { _id } = req.params;
    reservation.findOne({ _id })
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
//ajouter reservt
  Router.post("/", (req, res) => {
    const {  NbPersonne,heure, phone ,date} = req.body;
  
    const newReserve = new reservation({ date, NbPersonne,heure, phone });
    newReserve
      .save()
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
  //delete reservt
  Router.delete("/:_id", (req, res) => {
    const { _id } = req.params;
    reservation.findOneAndDelete({ _id })
      .then(data => res.send("success"))
      .catch(err => res.send("error"));
  });

  //modifier reservt
  Router.put("/:_id", (req, res) => {
    const { _id } = req.params;
    const { date, NbPersonne, phone,heure } = req.body;
    
    reservation.findOneAndUpdate({ _id }, { $set: { date, NbPersonne,phone, heure } })
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
  
  module.exports = Router;