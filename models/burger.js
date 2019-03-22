var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  InsertOne: function(post, cb) {
    orm.InsertOne(post, function(res) {
      cb(res);
    });
  },

  UpdateOne: function(name, dev, cb) {
    orm.UpdateOne(name, dev, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
