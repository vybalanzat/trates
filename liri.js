
require("dotenv").config();


var keys = require("./keys.js");
var Spotify = require('node-spotify-api')

var spotify = new Spotify(keys.spotify);

var inquire = require("inquirer");

// var userInput = process.argv.slice(3).join("");

var axios = require("axios");

        var userChoice = process.argv.slice(3).join("+");
        if(process.argv[2] === "concert-this"){ 
            findconcert();
        }

        else if (process.argv[2] === "spotify-this-song"){ 
            findSong(userChoice);
        }

        else if (process.argv[2] === "movie-this") {
            findMovie();
        }
        else if (process.argv[2] === "do-what-it-says") {
            random();
        }
        // else {
        //     connection.end();
        // }

function findMovie() {

    var userMovie = process.argv.slice(3).join("+");
 
    axios.get("http://www.omdbapi.com/?t=" + userMovie +  "&y=&plot=short&apikey=trilogy").then(
        
        function (response) {
            console.log("---------------------------------------");
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("Director: " + response.data.Director);
            console.log("Actors: " + response.data.Actors);
            console.log("Plot: " + response.data.Plot);
            console.log("---------------------------------------");
            
        })
    };


function findconcert () {

    var userConcert = process.argv.slice(3).join("");

    axios.get("https://rest.bandsintown.com/artists/" + userConcert + "/events?app_id=codingbootcamp").then(
        function(response){
            console.log(response.data);
        }
    )
    
};

function findSong (songName) {
    
    var test; 
    if (songName) {
        test = songName
    } else {
        test = "All the small things"
    }

    spotify.search({ type: 'track', query: test }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log("---------------------------------------");
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].external_urls);
        console.log("---------------------------------------");

});
};
