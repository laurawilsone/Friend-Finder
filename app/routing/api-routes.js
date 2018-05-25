//a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
//Load Data
var friendList = require('../data/friend.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

app.post('/api/friends', function(req,res){

  var newFriendScores = req.body.scores;
  var scoresArray = [];
  var match = 0;

  for(var i=0; i<friendList.length; i++){
    var scoresDiff = 0;
    for(var j=0; j<newFriendScores.length; j++){
      scoresDiff += Math.abs(friendList[i].scores[j] - newFriendScores[j]);
    }
    console.log(scoresDiff, friendList[i].name);
    scoresArray.push(scoresDiff);
  }
  
  for(var i=0; i<scoresArray.length; i++){
    if(scoresArray[i] <= scoresArray[match]){
      match = i;
    }
  }
  var closestMatch = friendList[match];
  res.json(closestMatch);
  friendList.push(req.body);
});
};

