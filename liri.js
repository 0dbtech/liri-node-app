console.log("test line 1");

//setup file and pkg requirements
var dotenv = require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var spotify = require("node-spotify-api");
var fs = require("fs");
//api keys
var keys = require("./keys");


//Grab user input

// Grabbing the search function
var command = process.argv[2];

// * `concert-this`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`

// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// var spotifyKey = new Spotify(keys.spotify);



function doWhatItSays (){

    console.log("selected function doWhatItSays to process *** " + term);

fs.readFile('random.txt', 'utf8', function(error, data) {

//READ FILE CONTENTS TEST
    console.log(data);
  if (error) {
    console.error(error);
  }

  console.log("******END FILE CONTENTS******");
//   var dataArray = data.split(', ');
//   // for (var i = 0; i < dataArray.length; i++) {
//   for (var i in dataArray) {
//     console.log(dataArray[i]);
//   }

//   dataArray.forEach(function(item) {
//     console.log(item);
//   })
  
  })

};


function movieThis() {
    console.log("selected function movieThis to process *** " + term);

var URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1bbf59b3&t="

axios.get(URL + term)
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
   
//DISABLED
console.log("\n-------------------------------------------------\n");
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
    console.log("Country produced: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);

    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.

  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

};



function concertThis() {
    console.log("selected function concertThis to process *** " + term);

    axios
    .get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp")
    .then(function(response) {
      // If the axios was successful...
      // Then log the body from the site!
     
  //DISABLED
      console.log(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });


}




function spotifyThisSong() {
    console.log("selected function spotifyThisSong to process *** " + term);


    axios
    .get("https://en.wikipedia.org/wiki/Kudos_(granola_bar)")
    .then(function(response) {
      // If the axios was successful...
      // Then log the body from the site!
     
  //DISABLED
      console.log(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });



}






//SWITCH for user input

switch (command) {
    case 'concert-this':
      concertThis();
      break;

    case 'spotify-this-song':
      spotifyThisSong();
      break;

    case 'movie-this':
      movieThis();
      break;

    case 'do-what-it-says':
      doWhatItSays();
      break;

    default:
      console.log('Unrecognized command')
  }


// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`
