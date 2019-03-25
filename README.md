# liri-node-app
LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Video Demonstration
https://drive.google.com/file/d/1XNZllgGus1hIDeln-elMf0wnzSrQZOHG/view


## How to use 
Use node to run this program. Use node liri.js then run one of the following four commands:

* `concert-this`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`


### When running a command follow it by desired text/search.
Examples:
* node liri concert-this Jimmy Buffett
* node liri spotify-this-song Free Falling
* node liri movie-this Space Jam

* Note 'do-what-it-says' does not accept any arguments, see section below


# Output of commands

### concert-this:

* Name of the venue
* Venue location
* Date of the Event

### spotify-this-song:

* Artist(s)
* Song title
* A preview link of the song from Spotify
* The album that the song is from
* If no song is provided then your program will default to "The Sign" by Ace of Base.

### movie-this:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.

### do-what-it-says:
A random.txt file will execute a command and search term listed in the file contents. It will seach spotify-this-song for "I want it that way" based on default included text contents.

### Technologies Incorporated into Project
* JavaScript
* file system
* Node.js
* Spotify API
* Bands in Town API
* OMDB API

### Setup

* pull application from gitHub Repo and change terminal directory to run it

* Create a .env file with your Spotify API info
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

Run cmd to install required packages via npm
* npm install
