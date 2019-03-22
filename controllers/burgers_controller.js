let express = require('express');
let burger = require('../models/burger');

let app = express();

app.get('/', function(req, res) {
  burger.selectAll(function(data) {
    console.log(data);
    res.json(data);
  });
});

app.post('/burger', function(req, res) {
  burger.InsertOne({ burger_name: req.body.name, devoured: false });
});

app.put('/burger/:id', function(req, res) {
  burger.UpdateOne(req.body.name, false);
});
