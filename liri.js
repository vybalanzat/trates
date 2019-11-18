
require("dotenv").config();


  var keys = require("./keys.js");

  var spotify = new Spotify(keys.spotify);

 var inquirer = require("inquirer");

function search() {

    inquire.prompt({

        type: "list",
        choices: ["concert-this", "`spotify-this-song", "movie-this", "do-what-it-says"],
        name: "search",
        message: "Pick an action!"




    }) 




}