var connection = require('./connection.js');

var orm = {
  selectAll: function() {
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  //the post needs to be an object with the same columns ie post = {burger_name:'string', devoured: false}
  InsertOne: function(post) {
    var queryString = 'INSERT INTO posts SET ?';
    console.log(queryString);
    connection.query(queryString, post, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  UpdateOne: function(burgerName, dev) {
    var queryString = 'UPDATE users SET devoured = ? WHERE burger_name = ?';

    connection.query(queryString, [dev, burgerName], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
