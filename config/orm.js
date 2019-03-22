var connection = require('./connection.js');

var orm = {
  selectAll: function(cb) {
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(cb);
      cb(result);
    });
  },

  //the post needs to be an object with the same columns ie post = {burger_name:'string', devoured: false}
  InsertOne: function(post, cb) {
    var queryString = `INSERT INTO burgers SET burger_name = '${
      post.burger_name
    }', devoured= ${post.devoured}`;
    console.log('means no worries');
    console.log('post', post);
    console.log('cb', cb);

    connection.query(queryString, post, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  UpdateOne: function(id, cb) {
    var queryString = 'UPDATE burgers SET devoured = ? WHERE id = ?';

    connection.query(queryString, [1, id], function(err, results) {
      if (err) throw err;
      cb(results);
    });
  }
};

module.exports = orm;
