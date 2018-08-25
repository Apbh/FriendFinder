//Load Data
var loadFriends = require("../data/friends");
var surveyScores = [];


module.exports = function (app) {
    //GET request
    app.get("/api/friends", function (req, res) {
        res.json(loadFriends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        //converting scores to array of numbers
        var results = newFriend.scores;
        // var stringnumber = results.toString();
        var numberArray = results.map(Number);
        // console.log(numberArray);
        var bestMatch;
        var differencescores = [];
        var matchName = "";
        var matchImage = "";

        //comparing with scores from other friends
        for (var i = 0; i < loadFriends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < numberArray.length; j++) {

                totalDifference += Math.abs(loadFriends[i].scores[j] - numberArray[j]);

            }
            differencescores.push(totalDifference);
            // console.log(differencescores); 

            var bestMatch = differencescores.indexOf(Math.min(...differencescores));
            // console.log("Best Match Index: " + bestMatch);
        }

        loadFriends.push(req.body);
        res.json(loadFriends[bestMatch]);
    });
};