const express = require("express");
const Router = express.Router();
const menu=require("../models/menu")
//Get ALl
Router.get("/", (req, res) => {
    menu.find()
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
//findOne
  Router.get("/:_id", (req, res) => {
    const { _id } = req.params;
    menu.findOne({ _id })
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
//ajouter menu
  Router.post("/", (req, res) => {
    const { plat, price,type ,description,img} = req.body;
  
    const newMenu = new menu({ plat, price,type ,description,img});
    newMenu
      .save()
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
  //delete menu
  Router.delete("/:_id", (req, res) => {
    const { _id } = req.params;
    menu.findOneAndDelete({ _id })
      .then(data => res.send("success"))
      .catch(err => res.send("error"));
  });

  //modifier menu
  Router.put("/:_id", (req, res) => {
    const { _id } = req.params;
    const { plat, price, type } = req.body;
    
    menu.findOneAndUpdate({ _id }, { $set: { plat, price,type } })
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
  
  module.exports = Router;