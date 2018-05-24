//a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
//Load Data
var friendList = require('../data/friend.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

};