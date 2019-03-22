var orm = require('./config/orm.js');

orm.selectAll();

newBurger = { burger_name: 'bob', devoured: false };
orm.InsertOne(newBurger);

updateBurger = { burger_name: 'bob', devoured: false };
orm.UpdateOne(updateBurger);

module.exports = orm;
