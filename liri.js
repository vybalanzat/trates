
var require("dotenv").config();


var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var inquire = require("inquirer");

search();

function search() {

    inquire.prompt({

        type: "list",
        choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says", "close"],
        name: "search",
        message: "Pick an action!"

    }).then(function(response){
        if(response.search === "concert-this"){ 
            findconcert();
        }

        else if (response.search === "spotify-this-song"){ 
            findSong();
        }

        else if (response.search === "movie-this") {
            findMovie();
        }
        else if (response.search === "do-what-it-says") {
            random();
        }
        else {
            connection.end();
        }
    

    });


}

var userInput = process.argv[2];

var axios = require("axios")

axios.get("http://www.omdbapi.com/?t=" + userInput +  "&y=&plot=short&apikey=trilogy").then(

function (reponse) ({
    console.log(response.data)



)})






