console.log("test line 1");

var dotenv = require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var spotify = require("node-spotify-api");
var fs = require("fs");

var keys = require("./keys.js");


//Grab user input

var command = process.argv[2];

var thing = process.argv[3];

// var spotify = new Spotify(keys.spotify);



function doWhatItSays (){

    console.log("selected function doWhatItSays to process *** " + thing);

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


// axios
//   .get("https://en.wikipedia.org/wiki/Kudos_(granola_bar)")
//   .then(function(response) {
//     // If the axios was successful...
//     // Then log the body from the site!
   
// //DISABLED
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an object that comes back with details pertaining to the error that occurred.
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });

function concertThis() {
    console.log("selected function concertThis to process *** " + thing);
}

function spotifyThisSong() {
    console.log("selected function spotifyThisSong to process *** " + thing);
}

function movieThis() {
    console.log("selected function movieThis to process *** " + thing);
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
