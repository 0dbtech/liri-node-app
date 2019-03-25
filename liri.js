// console.log("test line 1");

require('dotenv').config();
//setup file and pkg requirements


// require('dotenv').config();
var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var fs = require('fs');
//api keys
var keys = require('./keys');

// console.log("keys.spotify");
// console.log(keys.spotify);

var spotify = new Spotify(keys.spotify);


// console.log("inside spotify object");
// console.log(spotify);
//Grab user input

// Grabbing the search function
var command = process.argv[2];

// * `concert-this`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`

// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// console.log("term is at line 34");
// console.log(term);

// var spotifyKey = new Spotify(keys.spotify);



function doWhatItSays (){

    console.log("selected function doWhatItSays to process *** " + term);

    console.log("\n-------------------------------------------------\n");

fs.readFile('random.txt', 'utf8', function(error, data) {

//READ FILE CONTENTS TEST
    console.log(data);
  if (error) {
    console.error(error);
  }

  var dataArray = data.split(',');

  console.log(dataArray);

  command = dataArray[0];
  term = dataArray[1];

//assign text

  spotifyThisSong();

  });

};


function movieThis() {


  if (!term) {
  term = "Mr. Nobody";
  }
    console.log("selected function movieThis to process *** " + term);


axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=1bbf59b3&t=" + term)
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
    
  //set default
  // if(!term) {
  //   term = "Billy Joel"
  // }


    axios
    .get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp")
    .then(function(response) {
      // If the axios was successful...
      // Then log the body from the site!
           console.log("\n-------------------------------------------------");
            console.log("Upcoming concerts by " + term);
  //TESTING response
      // console.log(Object.keys(response.data));
      // console.log(Object.keys(response.data[0]));
      var concerts = response.data;
  
  console.log(concerts);

      for (i = 0; i < concerts.length; i ++){ 



console.log("\n");
            console.log("Venue Name: " + response.data[i].venue.name);

            console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);

    // var date = moment(response.data[0].datetime).format("MM/DD/YYYY");
  


            console.log("Concert Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));

    //  * Name of the venue

    //  * Venue location

    //  * Date of the Event (use moment to format this as "MM/DD/YYYY")

//end of for loop    
      };

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



// console.log("term just before spotify this song is " + term)

function spotifyThisSong() {

//set default song
if (!term) {
  term = "Ace of Base";
  }

  // console.log("\ntest var is " + test)

    console.log("selected function spotifyThisSong to process *** " + term);
       console.log("\n------------------------------------------------------------\n");

//    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 console.log("term inside spotify function is " + term)
// console.log(data);
// });

 spotify
        .search({
            type: 'track',
  //pass in seach term
            query: term,
        })
        .then(function (response) {
            response.tracks.items.forEach(function (track) {
                console.log('------------------------------------------');
                console.log(`Preview: ${track.preview_url}`);
                console.log(`Track name: ${track.name}`);
                console.log(`Artist name: ${track.artists[0].name}`);
                console.log(`Album name: ${track.album.name}`);
            })
        })
        .catch(function (err) {
            console.error(err);
        });
};









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
